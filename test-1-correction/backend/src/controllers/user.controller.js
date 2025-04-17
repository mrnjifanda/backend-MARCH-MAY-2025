const User = require('../models/User');

const create = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();

        return res.json({
            error: false,
            message: 'User created successfully !!!'
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: 'Internal Server Error'
        }); 
    }
};

const lists = async (req, res) => {
    try {
        const users = await User.find();
        return res.json({
            error: false,
            message: 'All Users',
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: 'Internal Server Error'
        }); 
    }
};

module.exports = { create, lists };
