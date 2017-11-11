const router = require("express").Router();
const custsController = require("../../controllers/custsController");

// Matches with "/api/custs"
router.route("/")
  .get(custsController.findAll)
  .post(custsController.create);

// Matches with "/api/custs/:id"
router
  .route("/:id")
  .get(custsController.findById)
  .put(custsController.update)
  .delete(custsController.remove);

module.exports = router;
