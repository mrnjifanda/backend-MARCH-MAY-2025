const Invoice = require('../models/Invoice');

const createInvoice = async (req, res) => {
    try {
        await Invoice.create(req.body);
        return res.status(201).json({
            error: false,
            message: "Invoice created successfully !!!"
        });
    } catch (error) {
        return res.status(401).json({
            error: true,
            message: "Invoice creation error: " + error.message
        });
    }
};

const getAllInvoices = async (req, res) => {
    try {

        const { id, role } = req.auth;
        const where = {};
        if (role === 'USER') {
            where.customer = id;
        }
        const invoices = await Invoice.find(where);
        return res.json({
            error: true,
            message: "All Invoices !!!",
            data: invoices
        });
    } catch (error) {
        return res.status(401).json({
            error: true,
            message: "Error: " + error.message
        });
    }
};

const completeInvoice = async (req, res) => {
    try {

        // NOTE: Use auth.middlewaire to auth au in req property
        const { id } = req.auth;
        const { idInvoice } = req.body;
        const invoice = await Invoice.findOne({ _id: idInvoice });
        if (!invoice || invoice.customer !== id) {
            return res.status(404).json({
                error: true,
                message: 'Invoice not found !!!'
            });
        }

        invoice.status = 'SUCCESS';
        await invoice.save();

        return res.status(202).json({
            error: false,
            message: "Invoice pay successfully !!!"
        });
    } catch (error) {
        return res.status(401).json({
            error: true,
            message: "Invoice pay error: " + error.message
        });
    }
};

module.exports = { createInvoice, getAllInvoices, completeInvoice };
