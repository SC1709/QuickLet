const express = require("express");
const {
  createCart,
  updateCart,
  deleteCart,
  getCartInfo,
} = require("../controllers/CartController");

const CartRoutes = express.Router();

CartRoutes.post("/", createCart);
CartRoutes.put("/", updateCart);
CartRoutes.delete("/", deleteCart);
CartRoutes.get("/", getCartInfo);

module.exports = CartRoutes;
