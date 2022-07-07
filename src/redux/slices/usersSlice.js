import { createSlice } from "@reduxjs/toolkit";
import { followUser, getAllUsers, unfollowUser } from "../asyncThunks";

const initialState = {
    users: [],
    isLoading: false
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{},
    extraReducers:{
        [getAllUsers.pending] : (state)=>{
            state.isLoading = true;
        },
        [getAllUsers.fulfilled] : (state,action)=>{
            state.isLoading = false;
            state.users= action.payload.data.users
        },
        [getAllUsers.rejected] : (state,action)=>{
            state.isLoading = false;
            console.error(action.payload.data.errors[0]);
        },
        [followUser.pending]: (state)=>{
            state.isLoading= false;
        },
        [followUser.fulfilled]: (state,action)=>{
            state.isLoading = false;
            state.users = action.payload.data.users;
        },
        [followUser.rejected]: (state, action)=>{
            state.isLoading = false;
            console.error(action.payload.data.errors[0]);
        },
        [unfollowUser.pending]:(state)=>{
            state.isLoading= false;
        },
        [unfollowUser.fulfilled]: (state,action)=>{
            state.isLoading = false;
            state.users = action.payload.data.users;
        },
        [unfollowUser.rejected]: (state, action)=>{
            state.isLoading = false;
            console.error(action.payload.data.errors[0]);
        },
    }
})


export const {reducer: usersReducer} = usersSlice