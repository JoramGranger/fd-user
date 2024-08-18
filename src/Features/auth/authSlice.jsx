import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + 'users/login';

// login slice
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, { email, password });
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// other slice code...

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || {},
    loading: false,
    error: null,
    isAuthenticated: !!localStorage.getItem('token'),
    token: localStorage.getItem('token') || null,
    validationErrors: {},
  },
  reducers: {
    logout: (state) => {
      state.user = {};
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setValidationErrors: (state, action) => {
      state.validationErrors = action.payload;
    },
    clearValidationErrors: (state) => {
      state.validationErrors = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.validationErrors = {};
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.validationErrors = action.payload.errors || {};
        } else {
          state.error = action.error.message;
        }
      });
    // other extraReducers...
  },
});

export const { logout, setUsername, setEmail, setPassword, setValidationErrors, clearValidationErrors } = authSlice.actions;
export default authSlice.reducer;
