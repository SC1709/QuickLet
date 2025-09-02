const User = require("../models/User");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(201).json({ message: "Users found successfully", users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { getAllUsers };