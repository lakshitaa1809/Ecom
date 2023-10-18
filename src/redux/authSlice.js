import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo:null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload;
    },

    logout: (state) => {
      state.userInfo = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

// store is composed of several slices,
// each slice contain specific login (auth slice for auth)
// or cart slice for cart logic
