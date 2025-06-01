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

// Base64 encode function (Node.js Buffer)
function btoa(str) {
  return Buffer.from(str).toString('base64');
}

export default async function handler(req, res) {
  const { token } = req.query;
  if (!token || typeof token !== 'string') {
    return res.status(400).json({ error: 'Token query param is required' });
  }

  try {
    const client = await connectToMongo();
    const db = client.db();
    const collection = db.collection('tokens');

    const found = await collection.findOne({ token });
    if (!found) {
      return res.status(404).json({ error: 'Token Not Found' });
    }

    const enctoken = btoa(token);
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || '';

    await collection.updateOne(
      { token },
      { $set: { enctoken, status: 'pending', ip } }
    );

    // Create Cuty.io short link
    const redirectUrl = `https://wreckedgen.vercel.app/enterusername?enctoken=${encodeURIComponent(enctoken)}`;
    const cutyApiUrl = `https://api.cuty.io/quick?token=b32e615894ec673e8907845cb&url=${encodeURIComponent(redirectUrl)}&alias=${encodeURIComponent(token)}`;

    const response = await fetch(cutyApiUrl);
    const data = await response.json();

    if (!data.success) {
      return res.status(500).json({ error: 'Failed to generate Cuty.io link', message: data.message });
    }

    return res.status(200).json({ shortLink: data.short_url });

  } catch (err) {
    console.error('Verify API error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
