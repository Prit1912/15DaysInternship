var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/add', function(req, res, next) {
  res.render('forms');
});
router.get('/view', function(req, res, next) {
  res.render('tables');
});

module.exports = router;
