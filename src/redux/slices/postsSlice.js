import { createSlice } from "@reduxjs/toolkit";
import {
  getAllPosts,
  createPost,
  editPost,
  deletePost,
  likePost,
  dislikePost,
  addComment,
  editComment,
  deleteComment,
} from "../asyncThunks/postsThunk";

const initialState = {
  posts: [],
  isLoading: false,
  status: "idle",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setBtnLoading: (state) => {
      state.isLoading = true;
    },
  },
  extraReducers: {
    [getAllPosts.pending]: (state, action) => {
      state.status = "pending";
    },

    [getAllPosts.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.posts = action.payload.data.posts;
    },

    [getAllPosts.rejected]: (state, action) => {
      state.status = "failed";
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
    [likePost.pending]: (state) => {
      state.isLoading = true;
    },
    [likePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [likePost.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [dislikePost.pending]: (state) => {
      state.isLoading = true;
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [dislikePost.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },

    [addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [addComment.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [editComment.pending]: (state) => {
      state.isLoading = true;
    },
    [editComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [editComment.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action);
    },
  },
});

export const { setBtnLoading } = postsSlice.actions;
export const { reducer: postsReducer } = postsSlice;
