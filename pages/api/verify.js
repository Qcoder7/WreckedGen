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
    return res.status(400).send('Token query param is required');
  }

  try {
    const client = await connectToMongo();
    const db = client.db();
    const collection = db.collection('tokens');

    const found = await collection.findOne({ token });
    if (!found) {
      return res.status(404).send('Token Not Found Error');
    }

    // Encode token and update DB
    const enctoken = btoa(token);
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || '';

    await collection.updateOne(
      { token },
      { $set: { enctoken, status: 'pending', ip } }
    );

    // Generate Linkvertise link
    const lvUserId = '991963';
    const redirectUrl = `https://wreckedgen.vercel.app/enterusername?enctoken=${encodeURIComponent(enctoken)}`;
    const lvLink = linkvertise(lvUserId, redirectUrl);

    // Respond with HTML page
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`
      <html>
        <head>
          <title>Verification Link</title>
          <style>
            body {
              background: linear-gradient(90deg, #1ca7ec, #1f2f98);
              color: white;
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              flex-direction: column;
              text-align: center;
            }
            .btn {
              margin-top: 20px;
              padding: 15px 30px;
              background: #fff;
              color: #1f2f98;
              font-weight: bold;
              font-size: 1.2rem;
              border-radius: 8px;
              cursor: pointer;
              text-decoration: none;
              display: inline-block;
              box-shadow: 0 4px 8px rgba(0,0,0,0.2);
              transition: background-color 0.3s ease;
            }
            .btn:hover {
              background: #ddd;
            }
          </style>
        </head>
        <body>
          <h1>Click The Link Below</h1>
          <a class="btn" href="${lvLink}" target="_blank" rel="noopener noreferrer">Proceed</a>
        </body>
      </html>
    `);
  } catch (err) {
    console.error('Verify API error:', err);
    res.status(500).send('Internal Server Error');
  }
}
