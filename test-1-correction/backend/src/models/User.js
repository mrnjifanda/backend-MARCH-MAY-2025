const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    category: {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User'
    }
}, { timestamps: true });

const User = model('user', userSchema);
module.exports = User;
