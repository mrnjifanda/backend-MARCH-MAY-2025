const { Router } = require('express');
const taskController = require('../src/controllers/task.controller')

const router = Router();

router.get("/tasks", taskController.getAllTasks);
router.post("/tasks/create", taskController.createOneTask);  
router.get("/tasks/find/:id", taskController.getTaskById);
router.put("/tasks/update/:id", taskController.updateTaskById);
router.put("/tasks/status/:id", taskController.changeStatusById);

module.exports = router;
