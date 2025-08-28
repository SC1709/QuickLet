const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      sku,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tage,
      dimensions,
      weight,
    } = req.body;

    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      sku,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tage,
      dimensions,
      weight,
      user: req.user._id, // refrence to admin user who created it
    });

    const createProduct = await product.save();
    res.status(201).json({
      message: "Product created successfully",
      createProduct,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createProduct };
