// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import authReducer from './features/auth/authSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export default store;