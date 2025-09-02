const express = require("express");
const { protect, admin } = require("../middleware/authMiddleware");
const { getAllUsers } = require("../controllers/AdminController");

const AdminRoutes = express.Router();

AdminRoutes.get("/",protect,admin,getAllUsers)

module.exports = AdminRoutes