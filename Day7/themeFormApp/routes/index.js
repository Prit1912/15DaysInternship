var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/form', function(req, res, next) {
  res.render('master');
});
router.post('/form_process', function(req, res, next) {
  fname = req.body.fname;
  mname = req.body.mname;
  lname = req.body.lname;
  cname = req.body.cname;
  sem = req.body.sem;
  phone = req.body.phone;
  mail = req.body.mail;
  uname = req.body.uname;
  pwd = req.body.pwd;
  pwd1 = req.body.pwd1;
  res.render('output',{fname:fname,lname:lname,cname:cname,sem:sem,phone:phone,mail:mail,uname:uname,pwd:pwd,pwd1:pwd1});
});

module.exports = router;
