import { createSlice } from "@reduxjs/toolkit";


// we used this to cache the search data and use it when we need it
const cacheSlice=createSlice({
    name:"cache",
    initialState:{},
    reducers:{
        storeCache:(state,action)=>{
              state=Object.assign(state,action.payload)
        }
    }
})

export const {storeCache}=cacheSlice.actions
export default cacheSlice.reducer;