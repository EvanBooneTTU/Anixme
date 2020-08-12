const express = require("express");

const animeControllers = require("../controllers/anime-controllers");

const router = express.Router();

router.get("/Anime/:name/", animeControllers.getAnimeByName);

router.get("/Browse/page:page", animeControllers.getAnimeByPage);

//router.get('/user/:uid', placesControllers.getPlaceByUserId);

module.exports = router;
