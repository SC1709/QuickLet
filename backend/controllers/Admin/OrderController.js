const Order = require("../../models/Order");

const getAllOrder = async (req, res) => {
  try {
    const order = await Order.find({}).populate("user", "name email");
    res.status(200).json({ message: "Order found successfully", order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = { getAllOrder, updateOrder, deleteOrder };
