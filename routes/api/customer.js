const router = require("express").Router();
const custsController = require("../../controllers/custController");

// Matches with "/api/custs"
router.route("/customers/")
  .get(custsController.findAll)
  .post(custsController.create);

// Matches with "/api/custs/:id"
router
  .route("/customers/:id")
  .get(custsController.findById)
  .put(custsController.update)
  .delete(custsController.remove);

module.exports = router;
