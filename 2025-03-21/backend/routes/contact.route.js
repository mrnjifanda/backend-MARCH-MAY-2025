const { Router } = require('express');
const contactController = require('../src/controllers/contact.controller');

const router = Router();

router.get("/lists", contactController.lists);
router.post("/create", contactController.createOne);
router.get("/details/:id", contactController.getDetails);
router.put("/update/:id", contactController.updateOneById);
router.delete("/delete/:id", contactController.deleteOneById);
router.delete("/delete-many/:ids", contactController.deleteManyByIds);

module.exports = router;
