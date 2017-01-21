var express = require('express');
var config = require('../config/config');
var router = express.Router();
var mustache = require('mustache');
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
    var page = fs.readFileSync(config.isCallerMobile(req) ?
        "views/game-M.html" : "views/game.html", "utf8");
    res.send(mustache.to_html(page));
});

module.exports = router;