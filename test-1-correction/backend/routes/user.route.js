const { Router } = require('express');
const { create, lists } = require('../src/controllers/user.controller');

const router = Router();

router.post('/create', create);
router.get('/lists', lists);

module.exports = router;
