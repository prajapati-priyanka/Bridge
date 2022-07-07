import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getAllUsers = createAsyncThunk(
  "users/allUsers",
  async ({ rejectWithValue }) => {
    try {
      const response = await axios.get("/api/users");
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

const followUser = createAsyncThunk(
  "users/follow",
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        { headers: { authorization: token } }
      );
      console.log("followUser", response);
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

const unfollowUser = createAsyncThunk(
  "users/unfollw",
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/unfollow/${followUserId}`,
        {},
        { headers: { authorization: token } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export { getAllUsers, followUser, unfollowUser };
