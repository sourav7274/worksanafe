import { Link } from "react-router-dom"
import { getTasks } from "../features/taskSlice"
import { getProjects } from "../features/projectSlice"
import { useDispatch,useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard = () =>{
   const [filterTask,setTasks] = useState([])
   const [filter,setFilter] = useState("All")
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { tasks } = useSelector((state) => state.tasks);
   const { projects } = useSelector((state) => state.projects);
    useEffect(() => {

    const verifyToken = () =>{
        const token = localStorage.getItem('token')
        if(!token)
        {
           navigate('/') 
        }
        
        }
        dispatch(getTasks())
        dispatch(getProjects())
    
         },[dispatch])

         useEffect(() =>{
        if(tasks && filter == "All")
        {
            setTasks(tasks)
        }
        else
        {
            const filTasks = tasks.filter((task) => task.status == filter)
            setTasks(filTasks)
        }
         },[tasks,filter])

        const handleFilter = (val) =>{
        setFilter(val)
        }
        // console.log(tasks)
        // console.log(projects)


    return(
        <div className="container">
        <h1 className="text-center">WorkSana Dashboard</h1>
        <div className="row">
          
            <div className="col-3 m-4">
                <div className="sidebar">
                    <h2>SideBar</h2>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link to="/management">Projects</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/teams">Teams</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/reports">Reports</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/">Settings</Link>
                        </li>
                    </ul>
                </div>
            </div>
    
       
            <div className="col mt-4">
                <h2>Main Content</h2>
                <ul className="list-group">
           
                    <li className="list-group-item">
                        {projects.length !== 0 && (
                            <div className="row">
                                {projects.map((pro) => (
                                    <div className="col" key={pro.name}>
                                        {pro.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </li>
    
                    <li className="list-group-item">----------------------</li>
    
    
                    <li className="list-group-item">
                        <h3>My Tasks:</h3>
                        {filterTask.length !== 0 ? (
                            <div className="row">
                                {filterTask.map((t) => (
                                    <div className="col-12 mb-3" key={t._id}>
                                        <div className="d-flex align-items-center justify-content-between border p-3 rounded">
                                      
                                            <div className="task-name col-3">{t.name}</div>
    
                                     
                                            <div className="task-owners col-4">
                                                <ul className="list-unstyled mb-0">
                                                    {t.owners.map((user) => (
                                                        <li key={user.name}>{user.name}</li>
                                                    ))}
                                                </ul>
                                            </div>
    
                                     
                                            <div className="task-time col-3">{t.timeToComplete} days</div>
    
                                          
                                            <div className="task-details col-2 text-end">
                                                <Link to={`/taskDetail/${t._id}`} className="btn btn-primary btn-sm">
                                                    Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>No tasks available</p>
                        )}
                    </li>
                   <li className="list-group-item">
                        <Link to="/taskcreate" className="btn btn-primary m-2">
                            Add a new task
                        </Link>
                    </li>
    
                    <li className="list-group-item">
                        <label className="form-label">Fiter by Status: </label>
                        <select className="form-select" onChange={(e) => handleFilter(e.target.value)}>
                            <option value="All">All</option>
                            <option value="To Do">To-do</option>
                            <option value="In Progress">In Progress</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
    )
}

export default Dashboard