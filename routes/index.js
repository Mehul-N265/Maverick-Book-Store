var express = require('express');
var router = express.Router();
let users = [];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Maverick Book Store| Dashboard' });

});


module.exports = router;
