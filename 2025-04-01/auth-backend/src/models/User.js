const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: String,
    fullName: String,
    password: {
        type: String,
        require: true
    },
    picture: {
        type: String,
        require: false,
        default: null
    }
}, { timestamps: true });

const User = model('user', userSchema);
module.exports = User;
