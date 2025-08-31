const express = require("express");
const { createCheckout } = require("../controllers/CheckoutController");
const { protect } = require("../middleware/authMiddleware");


const CheckoutRoutes = express.Router();

CheckoutRoutes.post("/",protect, createCheckout);

module.exports = CheckoutRoutes;