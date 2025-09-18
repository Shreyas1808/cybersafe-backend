const express = require('express');
const router = express.Router();
const Alert = require('../models/Alert');

router.get('/', async (req,res)=>{
  const alerts = await Alert.find().sort({createdAt:-1});
  res.json(alerts);
});

router.post('/', async (req,res)=>{
  const alert = new Alert(req.body);
  await alert.save();
  res.status(201).json(alert);
});

module.exports = router;
