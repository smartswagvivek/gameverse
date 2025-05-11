// models/Game.js
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  gameName: { type: String, required: true },
  description: { type: String, required: true },
  maxPlayers: { type: Number, required: true },
  creatorId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Game', gameSchema);
