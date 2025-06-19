const { Schema, model } = require('mongoose');

const conactSchema = new Schema({
    name: String,
    email: String,
    subject: String,
    message: String
}, { timestamps: true });

const Contact = model('contact', conactSchema);

module.exports = Contact;
