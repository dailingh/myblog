var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('signup', { title: 'Sign Up' });
	next();
});
router.post('/',function(req, res, next) {
	var newUser = {
		name: req.body.username,
		password: req.body.password,
	}
	fs.readFile('../data/data.js', 'utf8', function(err,data){
		if (err) {
			console.log(err)
		}
		
	});
})

module.exports = router;