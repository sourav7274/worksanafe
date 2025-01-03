import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { getTeams } from "../features/teamSlice"
import { getProjects } from "../features/projectSlice"
import { getTags } from "../features/tagSlice"
import { getUser } from "../features/userSlice"
import { addTasks } from "../features/taskSlice"

const TaskCreate = () =>{
    const dispatch = useDispatch()
    const [newTask,setTask] = useState({
        project:"",
        name:"",
        owners:[],
        team:"",
        tags:[],
        timeToComplete:999,
        status:""
    })

    useEffect(() => {
        dispatch(getTeams())
        dispatch(getProjects())
        dispatch(getTags())
        dispatch(getUser())
    },[dispatch])
    const {teams} = useSelector((state) => state.teams)
    const {projects} = useSelector((state) => state.projects)
    const {tags} = useSelector((state) => state.tags)
    const {users} = useSelector((state) => state.users)

    // console.log(users)

    const handleChnage = (e) =>{
        const {name,value,type,checked} = e.target
        
        if(type === "checkbox")
        {
            if( name == "owners" || name == "tags")
            {
                setTask((pval) => ({
                    ...pval,
                    [name]: checked ? [...pval[name],value] : pval[name].filter((item) => item != value)
                }))
            }
        } else{
            setTask((pval) => ({
                ...pval,
                [name]:value
            }))
        }
    }   

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(newTask)
        dispatch(addTasks(newTask))
    }


    return(
        <div className="container py-4">
            <form onSubmit={handleSubmit}>
            <h1 className="text-center">Create New Task for 
            <select name="project" onChange={(e) => handleChnage(e)} className="ms-5">
                <option>Select a  Project</option>
                {projects.map((pro) => <option value={pro._id}>{pro.name}</option>)}
            </select> </h1>
            <label className="form-label">Task Name</label>
                <input name="name" onChange={(e) => handleChnage(e)} className="form-control" type="text"></input><br></br>

                <div className="mb-3">
                <label>Team Members</label>
                {users.map((user) => (<div key={user._id}>
                    <label><input value={user._id} onChange={(e) => handleChnage(e)} name="owners" className="me-2" type="checkbox"/>{user.name}</label>
                </div>))}
                </div>
               

                <label className="form-label">Team</label>
                <select name="team"  onChange={(e) => handleChnage(e)} className="form-control">
                <option>Select a team</option>
                    {teams.map((team) => <option value={team._id}>{team.name}</option>)}
                </select><br></br>

                <label className="form-label">Tags</label> <br />
                    {tags.map((tag, index) => (
                        <div key={index}>
                            <input  onChange={(e) => handleChnage(e)}
                                className="form-check-input me-2" 
                                type="checkbox" 
                                id={`tag-${index}`} 
                                name="tags"
                                value={tag.name} 
                            />
                            <label className="form-check-label" htmlFor={`tag-${index}`}>
                                {tag.name}
                            </label>
                        </div>
                    ))}
                <br />
                <label className="form-label">Time to complete (Days): </label>
                <input name="timeToComplete"  onChange={(e) => handleChnage(e)} className="form-control" type="number"></input><br></br>
                <label className="form-label">Status: </label>
                <select name="status"  onChange={(e) => handleChnage(e)} className="form-control">
                    <option>Select a status</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Blocked">Blocked</option>
                </select>
                <button type="submit" className="btn btn-primary my-5">Create Task Button</button>
            </form>
            <Link className="btn btn-danger" to="/dashboard">Back to DashBoard</Link>
        </div>
    )
}

export default TaskCreate