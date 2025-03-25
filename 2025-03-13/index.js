const express = require('express');
const app = express();
app.use(express.json());

const users = [
    { fullName: "Seven Academy", age: 10, email: "seven@gmail.com" },
    { fullName: "Caleb", "age": 15, email: "caleb@gmail.com" },
    { fullName: "Roy", "age": 20, email: "roy@gmail.com" },
];

app.get("/users", (request, response) => {
    response.status(200).json(users);
});

// POSTMAN
// http://localhost:3050/users/create
app.post('/users/create', (request, response) => {

    const body = request.body; // All data come from html form with POST
    const newUser = {
        fullName: body.fullName,
        age: body.age,
        email: body.email
    }
    users.push(newUser);

    response.status(201).json(users);
});

app.delete('/users/delete/:email', (request, response) => {

    const email = request.params.email;
    let is_delete = false;
    for (let i = 0; i < users.length; i++) {
        const user = user[i];
        if (user.email == email) {

            delete users[i];
            is_delete = true;
            break
        }
    }

    if (is_delete == true) {
        response.status(200).json({message: "User deleted successfully !!!"})
    } else {
        response.status(404).json({message: "User not exist"})
    }
});


app.listen(3050, () => {
    console.log("Application running on url http://localhost:3050");
});