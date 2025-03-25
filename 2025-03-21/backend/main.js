const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/level-4-contact-app')
    .then(() => console.log("Database Okay"))
    .catch(error => console.log("Database not Okay", error));

const app = express();

app.use(cors());
app.use(express.json());

const contactRoute = require('./routes/contact.route');
app.use('/api', contactRoute);

app.listen(3000, () => {
    console.log("Application running on http://localhost:3000");
});
