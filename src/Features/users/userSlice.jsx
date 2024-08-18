// src/features/users/usersSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + 'users/';

// Fetch users from API
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { getState, rejectWithValue }) => {
    // const token = getState().auth.token; // Get token from state
    const user = getState().auth.user; // Get user from state
    const token = user?.accessToken; // Get accessToken from user object
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}` // Include token in headers
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


// Update user data
export const updateUserData = createAsyncThunk(
  'users/updateUserData',
  async (userData, { getState, rejectWithValue }) => {
    const user = getState().auth.user;
    const token = user?.accessToken;

    try {
      const response = await axios.put(`${API_URL}${user.id}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.loading = false;
        // Update user data logic here if needed
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
