var express = require('express');
var router = express.Router();
const contactService = require('../services/contact.service');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {

  const { message } = req.query;
  let showMessage = null;
  if (message) {
    if (message == 'Success') {
      showMessage = "Message send successfully !!!";
    } else {
      showMessage = "Error, please re-try";
    }
  }
  res.render('contact', { showMessage });
});

/* POST contact form. */
router.post('/contact-form', async function(req, res, next) {
  const data = req.body;
  const save = await contactService.saveContact(data, true);
  let message = "Error";
  if (save == true) {
    message = "Success";
  }

  res.redirect('/contact?message=' + message);
});

module.exports = router;
