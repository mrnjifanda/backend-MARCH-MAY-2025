const mongoose = require('mongoose');
const express = require('express');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/test_2_db').then(connexion => {

    const app = express();

    app.use(express.json())

    app.post('/user', async (request, response) => {
        try {
            // const user = new User(request.body);
            // await user.save();

            // OR 

            await User.create(request.body);
            return response.status(201).json({
                error: false,
                message: "User added !!!"
            });
        } catch (error) {
            return response.status(401).json({
                error: true,
                message: "Error:" + error.message
            });
        }
    });

    app.get('/users', async (request, response) => {
        try {

            const users = await User.find();
            return response.json({
                error: false,
                message: "All users",
                data: users
            });
        } catch (error) {
            return response.status(401).json({
                error: true,
                message: "Error:" + error.message
            });
        }
    });

    app.listen(3000, () => {
        console.log("Application run on 3000 !!!");
    });
}).catch(error => {
    console.log("Database connexion error: ", error);
})