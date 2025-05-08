var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Seven Academy' });
});

router.get('/about-us', function(req, res, next) {
  res.render('about-us')
});

router.get('/contact', function(req, res, next) {
  res.render('contact')
});

router.post('/contact-form', function(req, res, next) {
  const body = req.body;
  if (!body.name || !body.email || !body.subject || !body.message) {
    return res.redirect('/contact', { error: true, message: 'Please send all fields' })
  }

  // Save in the Database and send in the mail
  // redirect('/contact', { error: false, message: 'Message send successfully' });
});

module.exports = router;
