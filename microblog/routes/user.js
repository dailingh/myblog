var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.body);
  res.render('user', {
    title: 'Express' ,
    username: req.body.username ,
  });
});

module.exports = router;
