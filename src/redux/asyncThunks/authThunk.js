import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const loginUser = createAsyncThunk("auth/login", async (newUser) => {
  const response = await axios.post("/api/auth/login", newUser);
  console.log(response, "3rd")
  const data = { data: response.data, status: response.status };
  return data;
});


export { loginUser};