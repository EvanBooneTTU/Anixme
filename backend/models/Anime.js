const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const animeSchema = new Schema(
  {
    anime_name: { type: String, required: true },
    api_anime_name: { type: String, required: true },
    anime_image: { type: String, required: true },
    episode_count: { type: Number, required: true },
    episodes: { type: Array, required: true },
    index: { type: Number, required: true },
  },
  { collection: "AnimeList" }
);

module.exports = mongoose.model("Anime", animeSchema);
