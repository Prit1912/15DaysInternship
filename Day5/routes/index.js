var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/help', function(req, res, next) {
  res.send('What can we help you');
});

router.get('/nodejs/express', function(req, res, next) {
  res.render('node');
});


module.exports = router;
