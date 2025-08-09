import React, { useState } from "react";

const EditProductPage = () => {
  const [productsData, setProductsData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos/500?random=1",
      },
      {
        url: "https://picsum.photos/500?random=2",
      },
    ],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productsData);
  };
  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Edit Products</h2>
      <form onSubmit={handleSubmit}>
        {/* name */}
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={productsData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:appearance-none 
            focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        {/* description */}
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={productsData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:appearance-none 
            focus:outline-none focus:border-blue-500"
            rows={4}
            required
          />
        </div>
        {/* price */}
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={productsData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:appearance-none 
            focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* count In Stock */}
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">
            Count In Stock
          </label>
          <input
            type="number"
            name="countInStock"
            value={productsData.countInStock}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:appearance-none 
            focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* sku */}
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">SKU</label>
          <input
            type="text"
            name="sku"
            value={productsData.sku}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:appearance-none 
            focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* category */}
        {/* brand */}
        {/* sizes */}
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">
            Sizes (comma separated)
          </label>
          <input
            type="text"
            name="sizes"
            value={productsData.sizes.join(",")}
            onChange={(e) =>
              setProductsData({
                ...productsData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full p-2 border border-gray-300 rounded-md focus:appearance-none 
            focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* colors */}
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">
            Colors (comma separated)
          </label>
          <input
            type="text"
            name="colors"
            value={productsData.colors.join(",")}
            onChange={(e) =>
              setProductsData({
                ...productsData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full p-2 border border-gray-300 rounded-md focus:appearance-none 
            focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* collections */}
        {/* material */}
        {/* gender */}
        {/* images */}
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">
            Upload Image
          </label>
          <input
            type="file"
            onChange={handleImageUpload}
            className=" text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 
          file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 
          file:cursor-pointer focus:outline-none"
          />
          <div className="flex gap-4 mt-4">
            {productsData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText || "Product Image"}
                  className="w-20 h-20 object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
        {/* submit button */}
        <button
          type="submit"
          className="bg-green-500 w-full text-white py-2 px-4 rounded-md hover:bg-green-600 
          transition-colors cursor-pointer"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
