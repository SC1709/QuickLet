const express = require("express");
const { createProduct } = require("../controllers/ProductController");
const { protect } = require("../middleware/authMiddleware");

const ProductRoutes = express.Router();

ProductRoutes.post("/", protect, createProduct);

module.exports = ProductRoutes;
