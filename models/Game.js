const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  title: String,
  description: String,
  genre: [String],
  releaseDate: String,
  developer: String,
  screenshots: [String],
  trailer: String,
  steamLink: String,
  price: Number,
  averageRating: {
    type: Number,
    default: 0
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Game", GameSchema);