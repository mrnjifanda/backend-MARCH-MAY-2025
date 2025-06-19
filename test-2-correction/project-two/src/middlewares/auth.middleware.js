const { verifyToken } = require('../services/jwt.service');
const User = require('../models/User');

const isLogin = (role = 'ADMIN|USER') => {
    return async (req, res, next) => {
        try {
            const authorization = req.header('Authorization');
            const token = authorization && authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json({
                    error: true,
                    message: 'Unauthorize, please login !!!'
                });
            }

            const data = verifyToken(token);
            if (!data || !data.id) {
                return res.status(401).json({
                    error: true,
                    message: 'Unauthorize, please login !!!'
                });
            }

            const user = await User.findById(data.id);
            if (!user) {
                return res.status(401).json({
                    error: true,
                    message: 'Unauthorize, please login !!!'
                });
            }

            const roles = role.split('|');
            const userRole = user.role;
            if (!roles.includes(userRole)) {
                return res.status(43).json({
                    error: true,
                    message: 'Forbiden, you don\'t have full rights !!!'
                });
            }

            req.auth = {
                id: user._id,
                role: user.role
            }
            next();
        } catch (error) {
            return res.status(401).json({
                error: true,
                message: 'Unauthorize, please login !!!'
            });
        }
    }
};

module.exports = { isLogin };