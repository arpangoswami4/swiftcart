import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUser, authenticateUser, setAuthUser, getAuth } from "../../util";

export const createUserAction = createAsyncThunk(
  "auth/create",
  async (data, { rejectWithValue }) => {
    try {
      data = { ...data, userId: Math.random().toString(16).slice(2) };
      await createUser(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authenticateUserAction = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await authenticateUser(data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAuthAction = createAsyncThunk(
  "auth/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAuth();
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const logoutUserAction = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const data = { loggedIn: false, userName: "", userId: "" };
      await setAuthUser(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
