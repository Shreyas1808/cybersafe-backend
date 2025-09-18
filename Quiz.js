const mongoose = require('mongoose');
const QuizSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswerIndex: { type: Number, required: true },
  explanation: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Quiz', QuizSchema);
