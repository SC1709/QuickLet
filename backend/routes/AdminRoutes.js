const express = require("express");
const { protect, admin } = require("../middleware/authMiddleware");
const { getAllUsers, addUser, updateUser } = require("../controllers/AdminController");

const AdminRoutes = express.Router();

AdminRoutes.get("/", protect, admin, getAllUsers);
AdminRoutes.post("/", protect, admin, addUser);
AdminRoutes.put("/:id", protect, admin, updateUser);

module.exports = AdminRoutes;
