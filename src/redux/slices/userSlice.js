// userSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "../intialStates/userInitialState";

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      Cookies.set("isLoggedIn", "true");
      console.log("userSlice", state.user);
    },
    resetUser: (state) => {
      state.user = null;
      Cookies.remove("isLoggedIn");
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
