import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// fetch all users (admin only)
export const fetchUsers = createAsyncThunk("admin/fetchUser", async () => {
  const response = await axios.get(`${backendUrl}/api/admin/users`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
  });
  return response.data;
});

// add the user
export const addUser = createAsyncThunk(
  "admin/addUser",
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
  "admin/updateUser",
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

// delete a user
export const deleteUser = createAsyncThunk("admin/deleteUser", async (id) => {
  const response = await axios.delete(`${backendUrl}/api/admin/users/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  return response.data;
});
