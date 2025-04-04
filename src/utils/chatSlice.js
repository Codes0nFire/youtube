import { createSlice } from "@reduxjs/toolkit";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addmesssages:(state,action)=>{
           state.messages.splice(50,1)
           state.messages.unshift(action.payload);
        }
    }
});


export const {addmesssages}=chatSlice.actions;
export default chatSlice.reducer;