const { Schema, Model } = require("mongoose");

const taskSchema = new Schema({
    title: String,
    description: String,
    due_date: Date,
    status: {
        type: String,
        emun: ["Pending", "Done", "Cancel"]
    }
});

const Task = model('task', taskSchema);

module.exports = Task