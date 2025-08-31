const Checkout = require("../models/Checkout");

const createCheckout = async (req, res) => {
  const { checkoutItems, shippingAddress, paymentMethod, totalPrice } =
    req.body;

  if (!checkoutItems || checkoutItems.length === 0) {
    return res.status(400).json({ error: "No items in checkout" });
  }

  try {
    const checkout = await Checkout.create({
      user: req.user._id,
      checkoutItems,
      shippingAddress,
      paymentMethod,
      totalPrice,
      paymentStatus: "Pending",
      isPaid: false,
    });
    console.log(req.user._id);

    res
      .status(201)
      .json({ message: "Checkout created successfully", checkout });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createCheckout };
