import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../asyncThunks/postsThunk";

const initialState = {
    posts:[],
    isLoading: false
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers:{
        [getAllPosts.pending]: (state, action) => {
            state.isLoading = true;
          },
      
          [getAllPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload.data.posts;
          
          },
      
          [getAllPosts.rejected]: (state, action) => {
            state.isLoading = false;
            console.error(action.payload.data.errors[0]);
          },
    }
});

export const {reducer: postsReducer} = postsSlice;