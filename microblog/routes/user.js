var express = require('express');
var router = express.Router();
var session = require('express-session');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.session.username);
  var weibos = "";
  fs.readFile('./data/blog.js','utf-8',function(err,data){
    var blogs = JSON.parse(data);
    console.log(blogs[1]);
    for (var i = 0; i < blogs.length; i++) {
      if (blogs[i].name === req.session.username) {
        weibos += "<div class = 'blog'><div>"+blogs[i].name+"</div><div>"+blogs[i].time+"</div><div>"+blogs[i].blog+"</div></div>"
      }      
    }
    // console.log(weibos+"111");
    res.render('user', {
      title: 'Express' ,
      username: req.session.username,
      weibos: weibos,
    });
  })


});

router.post('/',function(req, res, next) {
  console.log(req.body);
  fs.readFile('./data/blog.js','utf-8',function(err,data) {
    var blog = JSON.parse(data);
    blog.unshift({
      name: req.body.name,
      time: req.body.time,
      blog: req.body.blog,
    })
    var newblog = JSON.stringify(blog);
    fs.writeFile('./data/blog.js',newblog)
  })
  res.json({
    state:200,
    name: req.body.name,
    time: req.body.time,
    blog: req.body.blog,
  })
})
module.exports = router;
