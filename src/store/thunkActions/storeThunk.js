import { createAsyncThunk } from "@reduxjs/toolkit";

import { createCloth, deleteCloth, getClothes } from "../../util";

export const createClothAction = createAsyncThunk(
  "store/create",
  async (data, { rejectWithValue }) => {
    try {
      data = { ...data, id: Math.random().toString(16).slice(2) };
      await createCloth(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getClothAction = createAsyncThunk(
  "store/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getClothes();
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const deleteClothAction = createAsyncThunk(
  "store/delete",
  async (id, { rejectWithValue }) => {
    try {
      await deleteCloth(id);
      return id;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
