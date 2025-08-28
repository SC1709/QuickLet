const express = require("express");
const {  createUser, LoginUser } = require("../controllers/UserController");
const UserRoutes = express.Router();
UserRoutes.post("/register", createUser);
UserRoutes.post("/login", LoginUser);
// userRoutes.get("/users/:id", userController.getUserById);
// userRoutes.post("/users", userController.createUser);
// userRoutes.put("/users/:id", userController.updateUser);
// userRoutes.delete("/users/:id", userController.deleteUser);

module.exports = UserRoutes;