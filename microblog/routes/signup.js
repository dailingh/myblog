var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('signup', { title: 'Sign Up' });
	next();
});
router.post('/',function(req, res, next){
	var username = req.body.username;
	var password = req.body.password;
	console.log(username);
	console.log(password);
	fs.readFile('./data/data.js','utf-8', function(err,data){
		console.log(data); 
		var user = JSON.parse(data);
		console.log(user);
		for(i = 0;i<user.length;i++){
			if(username === user[i].name){
				console.log("the user is exist")
			}
			
		}
		user.push({name: username,password: password});	
		console.log(user);	
		// var newuser = JSON.stringify(user);
		// console.log(newuser);
		// fs.writeFile('./data/data.js',newuser)
	})
	res.end();
})

module.exports = router;