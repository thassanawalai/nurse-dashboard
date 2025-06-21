import mongoose from 'mongoose';

const SurveySchema = new mongoose.Schema({
  personalInfo: {
    nickname: String,
    age: String,
    gender: String,
    occupation: String,
  },
  results: {
    timestamp: Date,
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Survey || mongoose.model('Survey', SurveySchema);
