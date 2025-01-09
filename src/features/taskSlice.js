import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getTasks = createAsyncThunk('task/get', async () => {
    const response = await fetch("https://work-sana-be-git-master-depressions-projects.vercel.app/tasks", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    // console.log(data.tasks);

    return data.tasks;
});

export const addTasks = createAsyncThunk('/task/add', async (info) =>{
    const response = await fetch('https://work-sana-be-git-master-depressions-projects.vercel.app/newTask',{
        method: "POST",
        headers :{
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(info)
    })

    if(!response.ok)
    {
        console.log("Error sending tasks")
    }
    else
    {
        return "Success"
    }
})


const taskSlice = createSlice({
    name: "taskSlice",
    initialState:{
        tasks:[]
    },
    reducers:{
    },
    extraReducers: (builder) =>{
        builder.addCase(getTasks.fulfilled,(state,action) =>{
            state.tasks = action.payload
        })
    }
})

export default taskSlice.reducer