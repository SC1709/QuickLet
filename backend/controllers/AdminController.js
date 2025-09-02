const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).json({ message: "Users found successfully", users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new User({
      name,
      email,
      password,
      role: role || "customer",
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllUsers, addUser };
