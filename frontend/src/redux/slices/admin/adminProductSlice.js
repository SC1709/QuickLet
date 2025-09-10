import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const USER_TOKEN = `Bearer ${localStorage.getItem("userToken")}`;

// async thunk to fetch all admin products
export const fetchAdminProducts = createAsyncThunk(
  "admin/fetchAdminProducts",
  async () => {
    const response = await axios.get(`${backendUrl}/api/admin/products`, {
      headers: {
        Authorization: USER_TOKEN,
      },
    });
    return response.data;
  }
);

// async thunk to add products
export const addProduct = createAsyncThunk(
  "admin/addProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/admin/products`,
        productData,
        {
          headers: {
            Authorization: USER_TOKEN,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// async thunk to update admin products
export const updateProduct = createAsyncThunk(
  "admin/updateProduct",
  async ({ id, productData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/admin/products/${id}`,
        productData,
        {
          headers: {
            Authorization: USER_TOKEN,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// async thunk to delete admin products
export const deleteProduct = createAsyncThunk(
  "admin/deleteProduct",
  async (id) => {
    const response = await axios.delete(
      `${backendUrl}/api/admin/products/${id}`,
      {
        headers: {
          Authorization: USER_TOKEN,
        },
      }
    );
    return response.data;
  }
);
