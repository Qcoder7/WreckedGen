import nextConnect from 'next-connect';
import multer from 'multer';
import { MongoClient, GridFSBucket } from 'mongodb';

// Set up Multer storage in memory (so we get file buffer)
const upload = multer({ storage: multer.memoryStorage() });

// MongoDB URI and DB name
const MONGO_URI = 'mongodb+srv://qcoder:moCLdBa0GpEWnvau@backupsaver.60vveds.mongodb.net/';
const DB_NAME = 'your_db_name_here'; // Replace with your DB name or keep default

// Connect to MongoDB once and reuse client (cache for performance)
let cachedClient = null;
let cachedDb = null;

async function connectToMongo() {
  if (cachedClient && cachedDb) return { client: cachedClient, db: cachedDb };

  const client = new MongoClient(MONGO_URI);
  await client.connect();
  const db = client.db(DB_NAME);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(500).json({ error: `Something went wrong! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  },
});

// Middleware to handle file upload, single file with fieldname 'file'
apiRoute.use(upload.single('file'));

apiRoute.post(async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { db } = await connectToMongo();
    const bucket = new GridFSBucket(db, { bucketName: 'uploads' });

    // Upload file buffer to GridFS
    const uploadStream = bucket.openUploadStream(req.file.originalname, {
      contentType: req.file.mimetype,
    });

    uploadStream.end(req.file.buffer);

    uploadStream.on('error', (err) => {
      return res.status(500).json({ error: 'Upload failed: ' + err.message });
    });

    uploadStream.on('finish', () => {
      res.status(200).json({ message: 'upload done' });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export const config = {
  api: {
    bodyParser: false, // Disallow default body parsing to use multer
  },
};

export default apiRoute;
