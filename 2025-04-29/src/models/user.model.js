const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: String,
    name: String,
    content: String
});

const User = model('user', userSchema);

module.exports = User;
