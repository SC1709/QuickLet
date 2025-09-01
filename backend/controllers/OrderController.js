const Order = require("../models/Order");

const getAllOrders = async (req, res) => {
  try {
    // find all orders for authenticated user
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    }); // sort by createdAt in descending order
    res.status(201).json({ message: "Orders found successfully", orders });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllOrders };
