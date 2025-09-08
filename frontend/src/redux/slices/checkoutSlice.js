import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// Async Thunk for creating a checkout session
export const createCheckoutSession = createAsyncThunk(
  "checkout/createCheckoutSession",
  async (checkoutData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/checkout`,
        checkoutData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
