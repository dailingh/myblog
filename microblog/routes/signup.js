var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('signup', { title: 'Sign Up' });
	// next();
});
router.post('/',function(req, res, next){
	var username = req.body.username;
	var password = req.body.password;
	// console.log(username);
	// console.log(password);
	fs.readFile('./data/data.js','utf-8', function(err,data){
		// console.log(data);
		var user = JSON.parse(data);
		// console.log(user);
		var A ;
		for(i = 0;i<user.length;i++){
			if(username === user[i].name){
				// res.send('the user is exist');
				// break;
				A = true;
				break;
			}else{
				A = false;
			}
		}
		console.log(A);
		if (A) {
			res.send('the user is exist');
		}else {
			user.push({name: username,password: password});
			console.log(user);
			var newuser = JSON.stringify(user);
			console.log(newuser);
			fs.writeFile('./data/data.js',newuser);
			res.send('new user is signed up')
		}
	})
	// res.end();
})

module.exports = router;
