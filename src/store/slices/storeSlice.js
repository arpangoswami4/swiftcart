import { createSlice } from "@reduxjs/toolkit";
import { createClothAction, deleteClothAction, getClothAction } from "../thunkActions/storeThunk";


const storeSlice = createSlice({
  name: "store",
  initialState: { store: []},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createClothAction.fulfilled, (state, action) => {
      state.store.push(action.payload);
    });
    builder.addCase(getClothAction.fulfilled, (state, action) => {
      state.store = action.payload;
    });
    builder.addCase(deleteClothAction.fulfilled, (state, action) => {
      state.store = state.store.filter((cloth)=>cloth.id!== action.payload);
    });
  },
  
});

export const storeActions = storeSlice.actions;

export default storeSlice.reducer;
