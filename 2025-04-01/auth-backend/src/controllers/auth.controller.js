const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const findUserByEmail = await User.findOne({ email });
        if (!findUserByEmail) {
            return res.status(400).json({ message: "Incorrect credentials" });
        }

        const comparePassword = await bcrypt.compare(password, findUserByEmail.password);
        if (!comparePassword) {
            return res.status(400).json({ message: "Incorrect credentials" });
        }

        const token = await jwt.sign({ _id: findUserByEmail._id }, process.env.JWT_SECRET);
        return res.json({
            message: "Login successfully !!!",
            token: token
        })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

const register = async (req, res) => {
    const { confirm_password, ...data } = req.body;

    try {
        const findUserWithMail = await User.findOne({ email: data.email });
        if (findUserWithMail) {
            return res.status(419).json({ message: 'Email already exist, please change !!!' });
        }

        const hashPassword = await bcrypt.hash(data.password, 10);
        data.password = hashPassword;

        const user = new User(data);
        await user.save();
        return res.json({ message: "Registration successfully !!!" });
    } catch (error) {

        return res.status(500).json({
            message: 'Internal server error'
        })
    }
};

module.exports = { login, register };
