const { Router } = require('express');
const { login, register } = require('../src/controllers/user.controller');

const router = Router();

// NOTE: Create and use middleware for body validation

router.post('/auth/login', login);
router.post('/auth/register', register);

module.exports = router;
