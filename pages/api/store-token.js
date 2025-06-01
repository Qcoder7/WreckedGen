// pages/api/store-token.js
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://qcoder:Ig5NOsXZUqG4dofX@verifystoretokens.bqzciv1.mongodb.net/';
const dbName = 'verifystore';
const collectionName = 'tokens';

let cachedClient = null;

async function connectToMongo() {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST method is allowed' });
  }

  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: 'Token is required' });
  }

  try {
    const client = await connectToMongo();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert token with default structure
    const result = await collection.insertOne({
      token: token,
      ip: '',
      status: 'unused',
      enctoken: ''
    });

    return res.status(200).json({ success: true, insertedId: result.insertedId });
  } catch (err) {
    console.error('DB error:', err);
    return res.status(500).json({ error: 'Database error' });
  }
}
