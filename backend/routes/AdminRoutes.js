const express = require("express");
const { protect, admin } = require("../middleware/authMiddleware");
const { getAllUsers, addUser } = require("../controllers/AdminController");

const AdminRoutes = express.Router();

AdminRoutes.get("/", protect, admin, getAllUsers);
AdminRoutes.post("/", protect, admin, addUser);

module.exports = AdminRoutes;
