const { Router } = require('express');
var express = require('express');
var router = express.Router();
var users = require('./../controller/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/hello',users.hello);
router.get('/:userId', function(req,res,next){
  console.log('/users/:userId');
  next();
},function(req,res){
  res.json({
    userId : req.params['userId'],
    name: "Someone"
  });
});


module.exports = router;
