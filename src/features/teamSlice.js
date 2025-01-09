import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTeams = createAsyncThunk('teams/get', async () =>{

    const response = await fetch("https://work-sana-be-git-master-depressions-projects.vercel.app/teams",{
        method:"GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (!response.ok)
    {
        console.log("Error fetching teams")
    }
    const data = await response.json()
    return data.teams
})


const teamSlice = createSlice({
    name:'teams',
    initialState :{
        teams:[]
    },
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(getTeams.fulfilled,(state,action) =>{
            state.teams = action.payload
        })
    }
})


export default teamSlice.reducer