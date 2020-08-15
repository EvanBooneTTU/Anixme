const HttpError = require("../models/http-error");
const Anime = require("../models/Anime");

const getAnimeByName = async (req, res, next) => {
  const animeName = req.params.name;

  let animeData;

  try {
    animeData = await Anime.find({ api_anime_name: animeName });
  } catch (err) {
    const error = new HttpError(
      "Fetching Anime failed, please try again later",
      500
    );
    return next(error);
  }

  if (!animeData || animeData.length === 0) {
    return next(
      new HttpError("Could not find Anime for the provided anime name.", 404)
    );
  }

  res.json({
    animeData: animeData.map((anime) => anime.toObject({ getters: true })),
  });
};

const getAnimeByPage = async (req, res, next) => {
  const animePage = req.params.page;

  const endIndex = animePage * 15; //15 Anime per Page
  const startIndex = endIndex - 15;

  var indexes = [];

  //Makes an array of the indexes to be grabbed
  for (var i = startIndex; i < endIndex; i++) {
    indexes.push(i);
  }

  let animeData;

  //Grabs anime data from startIndex to endIndex
  try {
    animeData = await Anime.find({
      index: { $in: indexes },
    });
  } catch (err) {
    const error = new HttpError(
      "Fetching Anime failed, please try again later",
      500
    );
    return next(error);
  }

  if (!animeData || animeData.length === 0) {
    return next(
      new HttpError("Could not find Anime for the provided anime name.", 404)
    );
  }

  res.json({
    animeData: animeData.map((anime) => anime.toObject({ getters: true })),
  });
};

const getAllAnime = async (req, res, next) => {
  let animeData;

  try {
    animeData = await Anime.find({});
  } catch (err) {
    const error = new HttpError(
      "Fetching Anime failed, please try again later",
      500
    );
    return next(error);
  }

  if (!animeData || animeData.length === 0) {
    return next(new HttpError("Could not find Anime", 404));
  }

  res.json({
    animeData: animeData.map((anime) => anime.toObject({ getters: true })),
  });
};

exports.getAnimeByName = getAnimeByName;
exports.getAnimeByPage = getAnimeByPage;
exports.getAllAnime = getAllAnime;
