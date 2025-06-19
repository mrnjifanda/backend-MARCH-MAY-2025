const User = require('../models/User');
const { generateToken } = require('../services/jwt.service');

const register = async (req, res) => {
    try {
        // Don't forget to valide data with middleware
        await User.create(req.body);
        return res.status(201).json({
            error: false,
            message: "User register successfully !!!"
        });
    } catch (error) {
        return res.status(401).json({
            error: true,
            message: "Error, please verify your request"
        });
    }
}

const login = async (req, res) => {
    try {
        // Don't forget to valide data with middleware
        const { email, password } = req.body;
        const user = await User.findOne({ email: { $regex: new RegExp(email, 'i') }});
        if (!user || !user.compareHashPassword(password)) {
            return res.statut(401).json({
                error: true,
                message: "Incorrect credential !!!"
            });
        }

        const token = generateToken({
            id: user._id
        }, '1h');

        return res.json({
            error: false,
            message: "Login successfully !!!",
            data: { token, user }
        });
    } catch (error) {
        return res.status(401).json({
            error: true,
            message: "Error, please verify your request"
        });
    }
}

module.exports = { register, login };
