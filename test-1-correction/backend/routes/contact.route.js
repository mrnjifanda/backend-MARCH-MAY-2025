const { Router } = require('express');
const { create, lists, update, remove, getOne } = require('../src/controllers/contact.controller');

const router = Router();

router.post('/create', create);
router.get('/lists', lists);
router.get('/lists/:id', getOne);
router.put('/update/:id', update);
router.delete('/delete/:id', remove);

module.exports = router;
