import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://qcoder:Ig5NOsXZUqG4dofX@verifystoretokens.bqzciv1.mongodb.net/?retryWrites=true&w=majority';

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('verifytokens');

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

function linkvertise(userid, link) {
  const base_url = `https://link-to.net/${userid}/1/dynamic`; // fixed stable link part
  const encodedLink = Buffer.from(encodeURI(link)).toString('base64');
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
    const { client, db } = await connectToDatabase();
    const collection = db.collection('tokens');

    const tokenData = await collection.findOne({ token });

    if (!tokenData) {
      return res.status(404).json({ error: 'Token Not Found' });
    }

    const enctoken = Buffer.from(token).toString('base64');
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || '';

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
