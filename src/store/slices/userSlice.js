import { createSlice } from "@reduxjs/toolkit";

const initialState = { loggedIn: false, userName: "", userEmail: "" };

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.loggedIn = true;
      state.userName = action.payload.name;
      state.userEmail = action.payload.email;
    },
    logout(state) {
      state.loggedIn = false;
      state.userName = "";
      state.userEmail = "";
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
