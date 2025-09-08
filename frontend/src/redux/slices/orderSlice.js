import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// Async Thunk to fetch all user orders
export const fetchAllOrders = createAsyncThunk(
  "orders/fetchAllOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${backendUrl}/api/orders/my-orders`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
