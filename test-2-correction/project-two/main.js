require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const PORT = 3000; // Put this in .env
const DATABASE_URL = 'mongodb://localhost:27017/invoice_tracker'; // Put this in .env

const userRoute = require('./routes/user.route');
const invoicesRoute = require('./routes/invoice.route');

mongoose.connect(DATABASE_URL)
.then(connexion => {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use('/users', userRoute);
    app.use('/invoices', invoicesRoute);

    app.listen(PORT, () => {
        console.log("Application running on port: " + PORT);
    });
})
.catch(error => {
    console.log("Database Error !!!");
});