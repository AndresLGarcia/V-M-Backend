const express = require("express");
const controller = require("../controllers");
const router = express.Router();

router.route("/history").get(controller.getAll);
router.route("/acronym").get(controller.getAcronym);

/*router
  .route("/:id")
  .get(controller.getTodo)
  .put(controller.updateTodo)
  .delete(controller.deleteTodo);*/
module.exports = router;
