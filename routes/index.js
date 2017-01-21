var express = require('express');
var config = require('../config/config');
var router = express.Router();
var mustache = require('mustache');
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
    var page = fs.readFileSync("views/game.html", "utf8");
    res.send(mustache.render(page, { mobile: config.isCallerMobile(req) }));
});

module.exports = router;