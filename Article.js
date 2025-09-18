const mongoose = require('mongoose');
const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true },
  category: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Article', ArticleSchema);
