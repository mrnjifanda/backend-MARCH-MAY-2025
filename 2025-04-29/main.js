require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const appRoute = require('./routes/app.route');
const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URL)
.then(() => {

    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use('/', appRoute);

    app.listen(PORT, () => {
        console.log("http://localhost:" + PORT);
    })
})
.catch((error) => {
    console.log(error);
});

