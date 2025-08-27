const express = require("express");
const {  createUser } = require("../controllers/UserController");
const UserRoutes = express.Router();
UserRoutes.post("/register", createUser);
// userRoutes.get("/users/:id", userController.getUserById);
// userRoutes.post("/users", userController.createUser);
// userRoutes.put("/users/:id", userController.updateUser);
// userRoutes.delete("/users/:id", userController.deleteUser);

module.exports = UserRoutes;