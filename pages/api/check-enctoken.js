import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://qcoder:Ig5NOsXZUqG4dofX@verifystoretokens.bqzciv1.mongodb.net/verifystore?retryWrites=true&w=majority';

const options = {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true,
  }
};

let cachedClient = null;
async function connectToMongo() {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(uri, options);
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(req, res) {
  const { enctoken } = req.query;
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || '';

  if (!enctoken) return res.status(400).json({ valid: false });

  try {
    const client = await connectToMongo();
    const db = client.db();
    const tokens = db.collection('tokens');

    const record = await tokens.findOne({ enctoken });

    if (!record || record.ip !== ip) {
      return res.status(404).json({ valid: false });
    }

    return res.status(200).json({ valid: true });
  } catch (e) {
    console.error('Check enctoken error:', e);
    return res.status(500).json({ valid: false });
  }
}
