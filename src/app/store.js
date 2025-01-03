import { configureStore } from "@reduxjs/toolkit";
import mainSliceReducer from "../features/taskSlice";
import projectSliceReducer from "../features/projectSlice"
import teamSliceReducer from '../features/teamSlice'
import tagSliceReducer from '../features/tagSlice'
import userSliceReducer from '../features/userSlice'

const store =  configureStore({
    reducer:{
        tasks: mainSliceReducer,
        projects: projectSliceReducer,
        teams: teamSliceReducer,
        tags: tagSliceReducer,
        users: userSliceReducer
    }
})

export default store

