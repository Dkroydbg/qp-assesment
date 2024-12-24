const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const {
  addGrocery,
  getAllGroceries,
  deleteGroceryById,
  updateGrocery,
} = require("../controllers/ItemsController.js");

// Admin routes
router.route("/groceries", auth("admin")).post(addGrocery);
router.route("/groceries", auth()).get(getAllGroceries);
router.route("/groceries/:id", auth("admin")).put(updateGrocery);
router.route("/groceries/:id", auth("admin")).delete(deleteGroceryById);

module.exports = router;
