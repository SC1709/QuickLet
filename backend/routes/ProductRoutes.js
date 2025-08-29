const express = require("express");
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
} = require("../controllers/ProductController");
const { protect, admin } = require("../middleware/authMiddleware");

const ProductRoutes = express.Router();

ProductRoutes.post("/", protect, admin, createProduct);
ProductRoutes.put("/:id", protect, admin, updateProduct);
ProductRoutes.delete("/:id", protect, admin, deleteProduct);
ProductRoutes.get("/", getAllProducts);
ProductRoutes.get("/:id", getProductById);

module.exports = ProductRoutes;
