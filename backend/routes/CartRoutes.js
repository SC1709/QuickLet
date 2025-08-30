const express = require("express");
const { createCart, updateCart, deleteCart } = require("../controllers/CartController");

const CartRoutes = express.Router();

CartRoutes.post("/", createCart);
CartRoutes.put("/", updateCart);
CartRoutes.delete("/", deleteCart);

module.exports = CartRoutes;