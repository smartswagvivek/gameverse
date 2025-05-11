// routes/gameRoutes.js
const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

router.post('/create', async (req, res) => {
  const { gameName, description, maxPlayers, creatorId } = req.body;
  try {
    const newGame = new Game({ gameName, description, maxPlayers, creatorId });
    await newGame.save();
    res.status(201).json({ message: 'Game created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
