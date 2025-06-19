const { Router } = require('express');
const { createInvoice, getAllInvoices, completeInvoice } = require('../src/controllers/invoice.controller');
const { isLogin } = require('../src/middlewares/auth.middleware');
const router = Router();

// NOTE: Create and use middleware for body validation


router.post('/create', isLogin('ADMIN'), createInvoice);
router.get('/', isLogin('ADMIN|USER'), getAllInvoices);
router.post('/pay', isLogin('USER'), completeInvoice);

module.exports = router;
