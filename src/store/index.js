import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import storeSlice from "./slices/storeSlice";

const store = configureStore({
  reducer: { authData: authReducer, storeData: storeSlice },
});

export default store;
