const express = require("express");
const { getAllOrders } = require("../controllers/OrderController");
const { protect } = require("../middleware/authMiddleware");

const OrderRoutes = express.Router();

OrderRoutes.get("/my-orders", protect, getAllOrders);

module.exports = OrderRoutes;
