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

const updateCheckout = async (req, res) => {
  const { paymentStatus, paymentDetails } = req.body;
  try {
    const checkout = await Checkout.findById(req.params.id);
    if (!checkout) {
      return res.status(404).json({ error: "Checkout not found" });
    }

    if (paymentStatus === "Paid") {
      checkout.isPaid = true;
      checkout.paymentStatus = paymentStatus;
      checkout.paymentDetails = paymentDetails;
      checkout.paidAt = Date.now();

      await checkout.save();
      return res
        .status(200)
        .json({ message: "Checkout updated successfully", checkout });
    } else {
      return res.status(400).json({ error: "Payment not successful" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const confirmedCheckout = async (req, res) => {
  try {
    const checkout = await Checkout.findById(req.params.id);
    if (!checkout) {
      return res.status(404).json({ error: "Checkout not found" });
    }
    if(checkout.isPaid && !checkout.isFinalized){
        
    }
    checkout.confirmed = true;
    await checkout.save();
    res.status(200).json({ message: "Checkout confirmed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createCheckout, updateCheckout,confirmedCheckout };
