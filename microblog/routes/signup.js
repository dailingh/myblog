var express = require('express');
var router = express.Router();
var crypto = require('crypto');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Sign Up' });
  next();
});
router.post('/',function(req,res){
	var md5 = crypto.createHash('md5');
	var password = md5.update(req.body.password).digest('base64');
})

module.exports = router;