const HttpError = require("../models/http-error");
const DUMMY_ANIME = require("./DUMMY_ANIME").DUMMY_ANIME;

const getAnimeByName = (req, res, next) => {
  const animeName = req.params.name; // { name: "18if" }
  animeName2 = animeName.split("%20").join(" "); //Replaces %20 in url with spaces to find title.
  animeName3 = animeName.split("`").join("/"); //Replaces %60, (the `) with the slashes the name originally had

  const anime = DUMMY_ANIME.find((a) => {
    return a.anime_name === animeName3;
  });

  if (!anime) {
    return next(new HttpError("Could not find anime from given name.", 404));
  }

  res.json({ anime }); // => { place } => { place: place }
};

const getAnimeByPage = (req, res, next) => {
  const animePage = req.params.page; // { page: "10" }
  //14 Anime per page
  const endAnimeIndex = animePage * 14; //Page 1 = 13 index
  const startAnimeIndex = endAnimeIndex - 14; //Page 1 = 0 index

  const animes = DUMMY_ANIME.slice(startAnimeIndex, endAnimeIndex);

  if (!animes) {
    return next(new HttpError("Could not find anime from given name.", 404));
  }

  res.json({ animes });
};

exports.getAnimeByName = getAnimeByName;
exports.getAnimeByPage = getAnimeByPage;
