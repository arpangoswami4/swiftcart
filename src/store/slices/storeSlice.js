import { createSlice } from "@reduxjs/toolkit";
import {
  createClothAction,
  deleteClothAction,
  getClothAction,
  updateClothAction,
} from "../thunkActions/storeThunk";

const storeSlice = createSlice({
  name: "store",
  initialState: { store: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createClothAction.fulfilled, (state, action) => {
      state.store.push(action.payload);
    });

    builder.addCase(getClothAction.fulfilled, (state, action) => {
      state.store = action.payload;
    });

    builder.addCase(deleteClothAction.fulfilled, (state, action) => {
      state.store = state.store.filter((cloth) => cloth.id !== action.payload);
    });

    builder.addCase(updateClothAction.fulfilled, (state, action) => {
      let updateIndex = state.store.findIndex(
        (cloth) => cloth.id === action.payload.id
      );
      state.store[updateIndex] = {...action.payload.data, id: action.payload.id};
    });
  },
});

export const storeActions = storeSlice.actions;

export default storeSlice.reducer;
