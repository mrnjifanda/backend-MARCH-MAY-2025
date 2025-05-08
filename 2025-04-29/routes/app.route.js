const { Router } = require('express');
const { create } = require('../src/controllers/app.controller');

const router = Router();

router.post('/send-mail', create);

module.exports = router;
