// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: "Prachi Kumari",
    role: "admin",
    email: "prachi@example.com"
  },
  isAuthenticated: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;