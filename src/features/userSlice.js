import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getUser = createAsyncThunk('get/user',async () =>{
    const response = await fetch('https://work-sana-be-git-master-depressions-projects.vercel.app/users',{
        method:"GET",
        headers:{
            'Content-Type':"application/json"
        }
    })

    if(!response.ok)
    {
        console.log("Error fetching users")
    }

    const data = await response.json()
    return data.data
})


const userSlice = createSlice({
    name:"users",
    initialState:{
        users:[]
    },
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(getUser.fulfilled,(state,action) =>{
            state.users = action.payload
        })
    }
})

export default userSlice.reducer