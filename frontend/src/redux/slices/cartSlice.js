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

// Fetch cart data for a user or guest
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async ({ guestId, userId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${backendUrl}/api/carts`, {
        params: {
          guestId,
          userId,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Add an item to cart for a user or guest
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (
    { guestId, userId, productId, quantity, size, color },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`${backendUrl}/api/carts`, {
        guestId,
        userId,
        productId,
        quantity,
        size,
        color,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// update the quantity of an item in cart
export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async (
    { guestId, userId, productId, quantity, size, color },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.put(`${backendUrl}/api/carts`, {
        guestId,
        userId,
        productId,
        quantity,
        size,
        color,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Remove an item from cart
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async ({ guestId, userId, productId, size, color }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${backendUrl}/api/carts`, {
        data: { guestId, userId, productId, size, color },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// merge guest cart into user cart
export const mergeGuestCart = createAsyncThunk(
  "cart/mergeGuestCart",
  async ({ guestId, userId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/carts/merge`,
        {
          guestId,
          userId,
        },
        {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
