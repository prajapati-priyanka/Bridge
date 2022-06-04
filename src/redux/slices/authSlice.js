import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../redux/asyncThunks/authThunk";


const initialState = {
 user: JSON.parse(localStorage.getItem("user")) || null,
 token: localStorage.getItem("token") || null,
 isLoading: false
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
        [loginUser.pending]: (state, action) => {

         
            state.isLoading = true;
          },

      [loginUser.fulfilled]: (state, action) => {
        
         state.isLoading = false;
          state.user = action.payload.data.foundUser
          state.token= action.payload.data.encodedToken
      },
  
     
  
      [loginUser.rejected]: (state, action) => {
        state.isLoading = false;
      },
 
  }
    
  });

export default authSlice.reducer;
