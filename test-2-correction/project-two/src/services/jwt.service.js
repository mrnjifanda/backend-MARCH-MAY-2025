const jwt = require('jsonwebtoken');

// Don't forget to put this varable in your .env file and use process.env.SECRET_TOKEN
const SECRET_TOKEN = "azertyuioazertyuiqsdfghjklwxcvbn"

function generateToken(data, expiresIn = '365d') {
    return jwt.sign(data, SECRET_TOKEN, { expiresIn });
}

function verifyToken (token) {
    try {
        return jwt.verify(token, SECRET_TOKEN);
    } catch (error) {

        return false;
    }
}

module.exports = { generateToken, verifyToken };