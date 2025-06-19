const { Schema, model } = require('mongoose');

const invoiceSchema = new Schema({
    code: String,
    dueDate: Date,
    invoiceDate: Date,
    customer: {
        type: Schema.ObjectId,
        ref: 'user'
    },
    company: {
        type: Schema.ObjectId,
        ref: 'user'
    },
    products: [{
        name: String,
        description: String,
        quantity: Number,
        price: Number
    }],
    total_amount: Number,
    status: {
        type: String,
        enum: ['PENDING', 'FAILED', 'SUCCESS'],
        default: 'PENDING'
    }
}, { timestamps: true });

const Invoice = model("invoice", invoiceSchema);

module.exports = Invoice;
