const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    fullName: String,
    phone: String,
    email: String,
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
}, { timestamps: true });

const Contact = model('contact', contactSchema);
module.exports = Contact;
