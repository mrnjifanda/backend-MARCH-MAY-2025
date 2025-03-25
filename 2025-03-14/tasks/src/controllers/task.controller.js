
const getAllTasks = async (req, res) => {
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
};

const createOneTask = async (req, res) => {

    const body = req.body;
    const task = new Task({
        title: body.title,
        description: body.description,
        due_date: body.due_date,
        status: body.status,
    });

    const save_task = await task.save();
    res.json(save_task);
};

const getTaskById = async (req, res) => {

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

};

const updateTaskById = async (req, res) => {
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
};

const changeStatusById = async (req, res) => {
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
};

module.exports = {
    getAllTasks,
    createOneTask,
    getTaskById,
    updateTaskById,
    changeStatusById
};