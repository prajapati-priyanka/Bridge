import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const editUserProfile = createAsyncThunk(
  "auth/edit",
  async ({ userData, token }, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        "/api/users/edit",
        { userData },
        { headers: { authorization: token } }
      );

      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status
      })
    }
  }
);

export { editUserProfile };
