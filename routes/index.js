var express = require('express');
var router = express.Router();

/* GET home page. */
//修改router/index.js,第一次请求时我们保存一条用户信息。
router.get('/', function (req, res, next) {
  var user = {
    name: "Chen-xy",
    age: "22",
    address: "bj"
  }
  req.session.user = user;
  res.render('index', {
    title: 'the test for nodejs session',
    name: 'sessiontest'
  });
});

module.exports = router;