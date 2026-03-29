require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());


// Test route
app.get("/", (req, res) => {
  res.send("IndieGamer Hub API Running 🚀");
});

// 🔥 RAWG API route (YOUR API KEY ADDED)
app.get("/api/games", async (req, res) => {
  try {
    console.log("Fetching games...");

    const response = await axios.get(
      'https://api.rawg.io/api/games?key=fa9aedba96f94897951cea6940c2cee3'
    );

    res.json(response.data.results);
  } catch (error) {
  console.log("FULL ERROR:", error.response?.data || error.message);
  res.status(500).json({ error: "Error fetching games" });
}
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});