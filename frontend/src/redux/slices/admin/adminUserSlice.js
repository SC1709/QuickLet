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

// update user info
export const updateUser = createAsyncThunk(
  "admin/updateUsers",
  async ({ id, name, email, role }) => {
    const response = await axios.put(
      `${backendUrl}/api/admin/users/${id}`,
      { name, email, role },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );
    return response.data;
  }
);
