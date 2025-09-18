const express = require('express');
const router = express.Router();

// Dummy AI endpoint - can integrate OpenAI or ML model later
router.post('/detect', async (req,res)=>{
  const { text } = req.body;
  // Simulate detection
  const result = text && text.toLowerCase().includes('phish')
    ? { safe:false, reason:'Contains suspicious keywords' }
    : { safe:true };
  res.json(result);
});

module.exports = router;
