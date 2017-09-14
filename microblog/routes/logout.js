var express = require('express');
var router = express.Router();
var session = require('express-session');
//
router.get('/',function (req, res) {
  delete req.session.username;
  // res.send('logout');
  res.redirect('/');
  // if (req.body.logout === "yeah") {
  //
  // }
})
module.exports = router;
