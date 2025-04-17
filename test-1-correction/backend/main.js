require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const DATABASE_URL = process.env.DATABASE_URL;
const APP_PORT = process.env.APP_PORT;

mongoose.connect(DATABASE_URL).then(() => {

    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    const userRoute = require('./routes/user.route');
    const contactRoute = require('./routes/contact.route');

    app.use('/api/users', userRoute);
    app.use('/api/contact', contactRoute);

    app.listen(APP_PORT,() => {
        console.log('Application running on http://localhost:' + APP_PORT);
    });
}).catch(error => {
    console.log(error);
});
