const express = require("express");
const mongoose = require("mongoose");

const taskMiddleware = require("./middlewares/task.middleware");
const Task = require("./models/Task");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/level4_march")
        .then(() => console.log("Database connect successfully !!!"))
        .catch(error =>  console.log(error));

const tasks = [];

app.get("/tasks" , (req, res) => {
    res.json(tasks);
});

app.post("/tasks/create", taskMiddleware.validate_data, async (req, res) => {

    const body = req.body;
    const task = new Task({
        title: body.title,
        description: body.description,
        due_date: body.due_date,
        status: body.status,
    });

    const save_task = await task.save();
    res.json(save_task);
});

app.get("/tasks/find", taskMiddleware.validate_email, (req, res) => {

    const email = req.query.email;
    let found_task = null;
    for (const task of tasks) {
        if (task.email === email) {
            found_task = task;
            break;
        }
    }

    if (found_task) {
        return res.json(found_task);
    } else {
        res.status(404).json({ error: "Email not found" });
    }
});

aa.listen(3000, () => {
    console.log("Application running on port http://localhost:3000");
});