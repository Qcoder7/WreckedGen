import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://qcoder:Ig5NOsXZUqG4dofX@verifystoretokens.bqzciv1.mongodb.net/verifystore?retryWrites=true&w=majority';
const webhookUrl = 'https://discord.com/api/webhooks/1367880439104012338/o6XRSE15oiezn-dvhKxFZbqAQuRIAhIBlImKrXwLIlkpYYIlskpQNgxcDg62w458D_ob';

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
  if (req.method !== 'POST') return res.status(405).end();

  const { username, enctoken } = req.body;
  if (!username || !enctoken) return res.status(400).json({ error: 'Missing username or token' });

  try {
    const client = await connectToMongo();
    const db = client.db();
    const tokens = db.collection('tokens');

    const record = await tokens.findOne({ enctoken });
    if (!record) return res.status(404).json({ error: 'Token not found' });

    // Send to Discord
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: username })
    });

    // Delete token
    await tokens.deleteOne({ enctoken });

    res.status(200).json({ success: true });
  } catch (e) {
    console.error('Send to Discord error:', e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
