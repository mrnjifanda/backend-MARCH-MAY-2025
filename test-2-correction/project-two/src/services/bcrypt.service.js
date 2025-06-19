const bcrypt = require('bcrypt');

async function hash(value) {

    try {

        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(value, salt);
    } catch (error) {

        console.log(error);
        return false;
    }
}

async function hashCompare(value, hash) {

    try {

        return await bcrypt.compare(value, hash);
    } catch (error) {

        console.log(error);
        return false;
    }
}

module.exports = { hash, hashCompare };
