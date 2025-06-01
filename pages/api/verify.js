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

function linkvertise(userid, link) {
  const base_url = `https://link-to.net/${userid}/${Math.floor(Math.random() * 1000)}/dynamic`;
  const href = base_url + "?r=" + btoa(encodeURI(link));
  return href;
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

    const enctoken = Buffer.from(token).toString('base64');
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || '';

    await collection.updateOne(
      { token },
      { $set: { enctoken, status: 'pending', ip } }
    );

    const lvUserId = '991963';
    const redirectUrl = `https://wreckedgen.vercel.app/enterusername?enctoken=${encodeURIComponent(enctoken)}`;
    const lvLink = `https://link-to.net/${lvUserId}/${Math.floor(Math.random() * 1000)}/dynamic?r=${Buffer.from(encodeURI(redirectUrl)).toString('base64')}`;

    return res.status(200).json({ linkvertiseLink: lvLink });
  } catch (err) {
    console.error('Verify API error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
