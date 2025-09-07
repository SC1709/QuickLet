import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// Helper function to load cart data from localStorage
const loadCartData = () => {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : { products: [] };
};

// Helper function to save cart data to localStorage
const saveCartData = (cartData) => {
  localStorage.setItem("cart", JSON.stringify(cartData));
};

