const User = require('../models/user.model');
const { send } = require('../services/mail.service');

const create = async (request, response) => {
    try {
        const body = request.body;
        const user = new User(body);
    
        await user.save();
        await send(body.email, "New registration on website", "Welcome in my very good website");
    
        return response.json({
            error: false,
            message: 'User save successfully !!!'
        });
    } catch (error) {
        return response.status(500).json({
            error: true,
            message: error.message ?? 'Unknow error'
        });
    }
};

module.exports = { create };
