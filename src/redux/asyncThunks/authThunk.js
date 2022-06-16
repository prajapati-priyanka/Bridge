import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const loginUser = createAsyncThunk("auth/login", async (newUser) => {
  try {
    const response = await axios.post("/api/auth/login", newUser);

    const data = { data: response.data, status: response.status };
    return data;
  } catch (error) {
    console.log(error);
  }
});

const signupUser = createAsyncThunk("auth/signup", async (newUser) => {
  try {
    const response = await axios.post("/api/auth/signup", newUser);
    console.log(response);
    const data = { data: response.data, status: response.status };
    return data;
  } catch (error) {
    console.log(error);
  }
});

export { loginUser, signupUser };
