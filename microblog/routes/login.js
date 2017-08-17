var express = require('express');
var router = express.Router();
var fs = require('fs');
router.get('/', function(req, res, next) {
	res.render('login', { title: 'Login' });
	// next();
});
router.post('/',function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  fs.readFile('./data/data.js','utf-8',function (err,data) {
    var user = JSON.parse(data);
    var A;
    for (var i = 0; i < user.length; i++) {
      if (username === user[i].name&& password === user[i].password) {
        A = true;
        break;
      }else {
        A = false;
      }
    }
    console.log(A)
    if (A) {
      res.redirect('/user');
    }else {
      res.send('the user is undefined')
    }
  })
})
module.exports = router;
