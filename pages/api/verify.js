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
  // Set waiting time to 10 seconds here
  const base_url = `https://link-to.net/${userid}/10/dynamic`;
  const encodedLink = btoa(encodeURI(link));
  return `${base_url}?r=${encodedLink}`;
}

export default async function handler(req, res) {
  const { token } = req.query;
  if (!token || typeof token !== 'string') {
    return res.status(400).json({ error: 'Token query param is required' });
  }

  try {
    const { db } = await connectToMongo();
    const collection = db.collection('tokens');

    const found = await collection.findOne({ token });
    if (!found) {
      return res.status(404).json({ error: 'Token Not Found' });
    }

    const enctoken = Buffer.from(token).toString('base64');
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || '';

    await collection.updateOne(
      { token },
      { $set: { enctoken, status: 'pending', ip } }
    );

    const lvUserId = '991963';
    const redirectUrl = `https://wreckedgen.vercel.app/enterusername?enctoken=${encodeURIComponent(enctoken)}`;
    const lvLink = linkvertise(lvUserId, redirectUrl);

    return res.status(200).json({ linkvertiseLink: lvLink });
  } catch (err) {
    console.error('Verify API error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
