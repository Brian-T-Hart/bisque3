const router = require("express").Router();
const custRoutes = require("./custs");

// Book routes
router.use("/custs", custRoutes);

module.exports = router;
