const express = require("express");
const { createCheckout, updateCheckout } = require("../controllers/CheckoutController");
const { protect } = require("../middleware/authMiddleware");


const CheckoutRoutes = express.Router();

CheckoutRoutes.post("/",protect, createCheckout);
CheckoutRoutes.put("/:id/pay",protect, updateCheckout);

module.exports = CheckoutRoutes;