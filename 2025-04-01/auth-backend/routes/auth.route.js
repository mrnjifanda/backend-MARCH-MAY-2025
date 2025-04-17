const { Router } = require('express');
const { loginValidation, registerValidation } = require('../src/middlewares/auth.middleware');
const { login, register } = require('../src/controllers/auth.controller');

const router = Router();

router.post('/login', loginValidation, login);
router.post('/register', registerValidation, register);

module.exports = router;
