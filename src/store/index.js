import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import storeSlice from "./slices/storeSlice";

const store = configureStore({
  reducer: { userData: userReducer, storeData: storeSlice },
});

export default store;
