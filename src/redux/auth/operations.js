import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const goitAPI = axios.create({
  baseURL: "https://connections-api.goit.global",
});

// axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  goitAPI.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkApi) => {
    try {
      const response = await goitAPI.post("/users/signup", newUser);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      const message =
        error.response?.status === 400
          ? "User with this email is already registered"
          : error.response?.data?.message || error.message;

      toast.error(message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (userInfo, thunkAPI) => {
    try {
      const response = await goitAPI.post("/users/login", userInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      const message =
        error.response?.status === 400
          ? "Invalid username or password"
          : error.response?.data?.message || error.message;

      toast.error(message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await goitAPI.post("/users/logout");
    clearAuthHeader();
    return response.data;
  } catch (error) {
    toast.error("Oops...try again!");
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const savedToken = thunkAPI.getState().auth.token;

      if (!savedToken) {
        return thunkAPI.rejectWithValue("Token is not exist!");
      }

      setAuthHeader(savedToken);
      const response = await goitAPI.get("/users/current");
      return response.data;
    } catch (error) {
      toast.error("Oops...try again!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
