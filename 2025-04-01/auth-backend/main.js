require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT;

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        const app = express();

        app.use(cors());
        app.use(express.json());

        const authRouter = require('./routes/auth.route');
        app.use("/auth", authRouter);

        app.listen(PORT, () => {
            console.log("Application running on http://localhost:" + PORT);
        });
    })
    .catch(error => {
        console.log("Error: Database connexion error " + error);
    });