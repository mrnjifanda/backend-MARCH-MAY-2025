const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    countryCode: {
        type: String,
        require: true,
        default: '+237'
    },
    phone: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    }
}, { timestamps: true });

const Contact = model('contact', contactSchema);

module.exports = Contact;
