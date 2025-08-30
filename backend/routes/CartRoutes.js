const express = require("express");
const { createCart } = require("../controllers/CartController");

const CartRoutes = express.Router();

CartRoutes.post("/", createCart);

module.exports = CartRoutes;