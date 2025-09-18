require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./routes/auth');
const articleRoutes = require('./routes/articles');
const quizRoutes = require('./routes/quizzes');
const alertRoutes = require('./routes/alerts');
const aiRoutes = require('./routes/ai');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') || '*'
}));

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 120
});
app.use(limiter);

app.use('/api/auth', authRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/alerts', alertRoutes);
app.use('/api/ai', aiRoutes);

app.get('/api/health', (req, res) => res.json({ status: 'ok', timestamp: Date.now() }));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
})
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});
