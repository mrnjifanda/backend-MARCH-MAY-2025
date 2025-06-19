const { Schema, model } = require('mongoose');
const { hash, hashCompare } = require('../services/bcrypt.service');

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: 'USER'
    }
}, { timestamps: true });

userSchema.pre('save', async function(next) {
    const hashPassword = await hash(this.password);
    this.password = hashPassword;
    next();
});

userSchema.methods.compareHashPassword = async function(password) {
    return await hashCompare(password, this.password);
}

const User = model("user", userSchema);

module.exports = User;
