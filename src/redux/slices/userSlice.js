// userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    authenticated: false,
    avatar: null,
    batch: null,
    createdAt: null,
    dept: null,
    email: null,
    erpID: null,
    firstName: null,
    lastName: null,
    token: null,
    updatedAt: null,
    __v: null,
    _id: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      console.log("userSlice", state.user);
    },
    resetUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
