import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts, createPost, editPost, deletePost } from "../asyncThunks/postsThunk";

const initialState = {
    posts:[],
    isLoading: false
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
      setBtnLoading: (state) => {
        state.isLoading = true;
      },
    },
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
          [createPost.pending]: (state) => {
            state.isLoading = true;
          },
          [createPost.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload.data.posts;
          },
          [createPost.rejected]: (state, action) => {
            state.isLoading = false;
            console.error(action.payload.data.errors[0]);
          },
          [editPost.pending]: (state) => {
            state.isLoading = true;
          },
          [editPost.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload.data.posts;
          },
          [editPost.rejected]: (state, action) => {
            state.isLoading = false;
            console.error(action.payload.data.errors[0]);
          },
          [deletePost.pending]: (state) => {
            state.isLoading = true;
          },
          [deletePost.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload.data.posts;
          },
          [deletePost.rejected]: (state, action) => {
            state.isLoading = false;
            console.error(action.payload.data.errors[0]);
          },
    }
});

export const { setBtnLoading } = postsSlice.actions;
export const {reducer: postsReducer} = postsSlice;
