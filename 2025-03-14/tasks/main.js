const express = require("express");
const mongoose = require("mongoose");

const taskMiddleware = require("./middlewares/task.middleware");
const Task = require("./models/Task");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/level4_march")
        .then(() => console.log("Database connect successfully !!!"))
        .catch(error =>  console.log(error));

app.get("/tasks" , async (req, res) => {
    try {
        
        const tasks = await Task.find();
        return res.json({
            message: "All tasks found",
            data: tasks
        });
    } catch (error) {
        return res.status(500).json({
            message: "Api error"
        });
    }
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

app.get("/tasks/find/:id", async (req, res) => {

    try {
        const id = req.params.id;
        // const task = await Task.find({ _id: id })
        // const task = await Task.findOne({ _id: id })
        const task = await Task.findById(id);
        if (task) {
            return res.json(task);
        } else {
            return res.status(404).json({
                message: "Task with id: " + id + " not found"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }

});


app.put('/tasks/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        await Task.findOneAndUpdate({ _id: id }, body);
        return res.json({
            message: "Task uptade successfuly"
        })
    } catch (error) {
        return res.status(404).json({
            message: "Task not found"
        })
    }
});

app.put("/tasks/status/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const status = req.body.status;

        const task = await Task.findById(id);
        if (task) {
            task.status = status;
            await task.save();
            return res.json({
                message: "Status update successfully"
            });
        } else {
            return res.status(404).json({
                message: "Task not found"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

aa.listen(3000, () => {
    console.log("Application running on port http://localhost:3000");
});