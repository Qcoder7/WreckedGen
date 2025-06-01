import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://qcoder:Ig5NOsXZUqG4dofX@verifystoretokens.bqzciv1.mongodb.net/?retryWrites=true&w=majority';

const options = {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true,
  },
};

let cachedClient = null;
let cachedDb = null;

async function connectToMongo() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }
  const client = new MongoClient(uri, options);
  await client.connect();
  const db = client.db('verifytokens');

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

function btoa(str) {
  return Buffer.from(str).toString('base64');
}

function linkvertise(userid, link) {
  const base_url = `https://link-to.net/${userid}/1/dynamic`;
  const encodedLink = btoa(encodeURI(link));
  return `${base_url}?r=${encodedLink}`;
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = req.query.token;
  if (!token) {
    return res.status(400).json({ error: 'Token query param is required' });
  }

  try {
    const { client, db } = await connectToMongo();
    const collection = db.collection('tokens');

    // Debug logs (remove/comment after testing)
    console.log('Received token:', token);

    const tokenData = await collection.findOne({ token });
    console.log('Token data found:', tokenData);

    if (!tokenData) {
      return res.status(404).json({ error: 'Token Not Found' });
    }

    const enctoken = btoa(token);
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';

    await collection.updateOne(
      { token },
      {
        $set: {
          enctoken,
          status: 'pending',
          ip,
        },
      }
    );

    const lvUserID = 991963;
    const finalLink = `https://wreckedgen.vercel.app/enterusername?enctoken=${enctoken}`;
    const lvLink = linkvertise(lvUserID, finalLink);

    return res.status(200).json({
      message: 'Token verified and processed',
      lvLink,
    });
  } catch (error) {
    console.error('DB error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
