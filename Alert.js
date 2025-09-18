const mongoose = require('mongoose');
const AlertSchema = new mongoose.Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  severity: { type: String, enum: ['info','warning','critical'], default: 'info' },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Alert', AlertSchema);
