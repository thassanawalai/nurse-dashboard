import dbConnect from '../../lib/mongodb';
import mongoose from 'mongoose';

const SurveySchema = new mongoose.Schema({}, { strict: false, collection: 'surveys' }); // ระบุชื่อ collection
const Survey = mongoose.models.Survey || mongoose.model('Survey', SurveySchema);

export default async function handler(req, res) {
  await dbConnect();
  const surveys = await Survey.find({}).lean();
  res.status(200).json(surveys);
}