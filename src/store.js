import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeslice';
import authReducer from './features/auth/authSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
  },
});

export default store;
