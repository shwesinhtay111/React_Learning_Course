var express = require('express');
var router = express.Router();
var movies = require('./../controller/MovieController');
router.get('/',movies.getAllMoive);
module.exports = router;