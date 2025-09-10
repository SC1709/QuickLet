import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// fetch all users (admin only)
export const fetchUsers = createAsyncThunk("admin/fetchUsers", async () => {
  const response = await axios.get(`${backendUrl}/api/admin/users`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
  });
  return response.data;
});

// add the user
export const addUser = createAsyncThunk(
  "admin/addUsers",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/admin/users`,
        userData,
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
