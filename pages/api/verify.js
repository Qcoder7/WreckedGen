import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://qcoder:Ig5NOsXZUqG4dofX@verifystoretokens.bqzciv1.mongodb.net/?retryWrites=true&w=majority';

function linkvertise(userid, link) {
  const base_url = `https://link-to.net/${userid}/1/dynamic`; // fixed "1" for stability
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

  let client;

  try {
    client = new MongoClient(uri);
    await client.connect();
    const db = client.db('verifytokens');
    const collection = db.collection('tokens');

    // Find token
    const tokenData = await collection.findOne({ token });

    if (!tokenData) {
      return res.status(404).json({ error: 'Token Not Found' });
    }

    // Create base64 encrypted token (enctoken)
    const enctoken = Buffer.from(token).toString('base64');

    // Update DB: save enctoken, set status to "pending", and save IP
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

    // Generate linkvertise link with userID and link to /enterusername?enctoken=...
    const lvUserID = 991963;
    const finalLink = `https://wreckedgen.vercel.app/enterusername?enctoken=${enctoken}`;
    const lvLink = linkvertise(lvUserID, finalLink);

    // Send response with link
    return res.status(200).json({
      message: 'Token verified and processed',
      lvLink,
    });
  } catch (error) {
    console.error('DB error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (client) await client.close();
  }
}
