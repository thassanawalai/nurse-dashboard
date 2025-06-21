import dbConnect from '../../lib/mongodb';

export default async function handler(req, res) {
  const db = await dbConnect();
  const collection = db.collection('surveys');

  if (req.method === 'GET') {
    const surveys = await collection.find({}).toArray();
    res.status(200).json(surveys);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}