const express = require("express");
const { createProduct } = require("../controllers/ProductController");
const { protect, admin } = require("../middleware/authMiddleware");

const ProductRoutes = express.Router();

ProductRoutes.post("/", protect,admin, createProduct);

module.exports = ProductRoutes;
