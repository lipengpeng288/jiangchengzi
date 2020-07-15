var express = require('express');
var router = express.Router();
var config = require('../conf/config');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(222222);
  res.sendFile(config.wwwwroot.path);

});

module.exports = router;
