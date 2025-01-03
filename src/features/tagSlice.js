import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getTags = createAsyncThunk('tags/get',async () =>{
    const response = await fetch ("http://localhost:3000/tags",{
        method:"GET",
        headers:{
            'Content-Type' : 'application/json'
        }
    })

    if(!response.ok)
    {
        console.log("Error fetching tags")
    }

    const data = await response.json()
    // console.log(data.tags)
    return data.tags
})


const tagSlice = createSlice({
    name:"tags",
    initialState:{
        tags:[]
    },
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getTags.fulfilled,(state,action) =>{
            state.tags = action.payload
        })
    }
})

export default tagSlice.reducer