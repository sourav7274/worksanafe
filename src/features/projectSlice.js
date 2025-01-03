import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProjects = createAsyncThunk("project/get",async () =>{
    const response = await fetch("http://localhost:3000/projects",{
        method:"GET",
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    const data = await response.json()
    // console.log(data.projects)
    return data.projects
})

const projectSlice = createSlice({
  name: "projectSlice",
  initialState:{
    projects:[]
  },
  reducers:{},
  extraReducers:(builder) => {
    builder.addCase( getProjects.fulfilled,(state,action) =>{
        state.projects = action.payload
    })
  }  
})

export default projectSlice.reducer