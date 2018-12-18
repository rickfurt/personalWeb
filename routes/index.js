var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'About me...'
 });
});

router.get('/test', function(req, res, next) {
  res.render('test', {
    title: 'Test PAge..'
 });
});

module.exports = router;
