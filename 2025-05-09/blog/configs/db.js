const mongoose = require('mongoose');

function connect() {

    mongoose.connect(process.env.DATABASE_URL)
        .then(() => {
            console.log("Database connection OK !!!");
        })
        .catch(error => {
            console.log("Database connection error !!!");
            process.exit();
        });
}

module.exports = { connect };
