import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getAllUsers = createAsyncThunk("users/allUsers", async () => {
  const response = await axios.get("/api/users");
  const data = { data: response.data, status: response.status };

  return data;
});

export { getAllUsers };
