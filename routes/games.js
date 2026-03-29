const express = require("express");
const router = express.Router();
const Game = require("../models/Game");

// Add new game
router.post("/add", async (req, res) => {
  try {
    const game = new Game(req.body);
    await game.save();
    res.json(game);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all games
router.get("/", async (req, res) => {
  const games = await Game.find();
  res.json(games);
});

// Get single game
router.get("/:id", async (req, res) => {
  const game = await Game.findById(req.params.id);
  res.json(game);
});

module.exports = router;