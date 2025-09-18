const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// Get all articles
router.get('/', async (req,res)=>{
  const articles = await Article.find().sort({createdAt:-1});
  res.json(articles);
});

// Add article (admin only - placeholder)
router.post('/', async (req,res)=>{
  const article = new Article(req.body);
  await article.save();
  res.status(201).json(article);
});

module.exports = router;
