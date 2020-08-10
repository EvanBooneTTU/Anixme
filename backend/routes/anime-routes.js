const express = require("express");

const animeControllers = require("../controllers/anime-controllers");

const router = express.Router();

router.get("/anime/:name/", animeControllers.getAnimeByName);

router.get("/anime/:name/*", animeControllers.getAnimeByName);

router.get("/browse/page:page", animeControllers.getAnimeByPage);

//router.get('/user/:uid', placesControllers.getPlaceByUserId);

module.exports = router;
