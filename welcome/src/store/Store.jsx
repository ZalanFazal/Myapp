import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/AuthSlice"; // Import your authSlice


export const store = configureStore({
  reducer: {
    auth: authReducer, // Include authReducer in your store
  },
});
