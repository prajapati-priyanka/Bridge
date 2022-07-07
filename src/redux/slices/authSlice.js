import { createSlice } from "@reduxjs/toolkit";
import { loginUser,signupUser } from "../../redux/asyncThunks/authThunk";
import { editUserProfile } from "../asyncThunks";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser :(state)=>{
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token")
    },

    updateUser: (state,action) =>{
      state.user = action.payload;
    }
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },

    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.foundUser;
      state.token = action.payload.data.encodedToken;
    },

    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [signupUser.pending]: (state) => {
      state.isLoading = true;
    },

    [signupUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.createdUser;
      state.token = action.payload.data.encodedToken;
    },

    [signupUser.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },

    [editUserProfile.pending] : (state)=>{
      state.isLoading = true;
    },
    [editUserProfile.fulfilled] : (state,action)=>{
      state.isLoading = false;
      state.user = action.payload.data.user;
    },
    [editUserProfile.rejected] : (state,action)=>{
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
  },
});

export const {logoutUser, updateUser} = authSlice.actions;
export const {reducer:authReducer} = authSlice
