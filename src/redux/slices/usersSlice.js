import { createSlice } from "@reduxjs/toolkit";
import { followUser, getAllUsers } from "../asyncThunks";

const initialState = {
    users: [],
    isLoading: false
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{},
    extraReducers:{
        [getAllUsers.pending] : (state,action)=>{
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
        [followUser.pending]: (state,action)=>{
            state.isLoading= false;
        },
        [followUser.fulfilled]: (state,action)=>{
            state.isLoading = false;
            state.user = action.payload.data.users;
        },
        [followUser.rejected]: (state, users)=>{
            state.isLoading = false;
            console.error(action.payload.data.errors[0]);
        }
    }
})


export const {reducer: usersReducer} = usersSlice