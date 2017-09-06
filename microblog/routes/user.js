var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.session.username+"111");
  res.render('user', {
    title: 'Express' ,
    username: req.session.username,
  });
});

module.exports = router;
