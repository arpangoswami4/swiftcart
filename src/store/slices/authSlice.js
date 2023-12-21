import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  createUserAction,
  authenticateUserAction,
  logoutUserAction,
  getAuthAction,
} from "../thunkActions/userThunk";

const initialState = { loggedIn: false, userName: "", userId: "" };

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(logoutUserAction.fulfilled, (state, action) => {
      state.loggedIn = false;
      state.userName = action.payload.userName;
      state.userId = action.payload.userId;
    });

    builder.addMatcher(
      isAnyOf(createUserAction.fulfilled, authenticateUserAction.fulfilled, getAuthAction.fulfilled),
      (state, action) => {
        console.log("abc");
        state.loggedIn = true;
        state.userName = action.payload.userName;
        state.userId = action.payload.userId;
      }
    );


    // setUser(state, action) {
    //   state.loggedIn = true;
    //   state.userName = action.payload.name;
    //   state.id = action.payload.id;
    // },
    // logout(state) {
    //   state.loggedIn = false;
    //   state.userName = "";
    //   state.id = "";
    // },
  },
});

export default authSlice.reducer;
