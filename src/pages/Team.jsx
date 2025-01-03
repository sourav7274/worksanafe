import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProjects } from "../features/projectSlice";
import { getTasks } from "../features/taskSlice";
import { useEffect, useState } from "react";
import { getUser } from "../features/userSlice";
import { getTeams } from "../features/teamSlice";

const Teams = () =>{
   const { tasks } = useSelector((state) => state.tasks);
   const { projects } = useSelector((state) => state.projects);
   const {teams} = useSelector((state) => state.teams)
   const [filterItems,setItems] = useState([])
   const dispatch = useDispatch()
   
   useEffect(() =>{
    dispatch(getProjects())
    dispatch(getTasks())
    dispatch(getTeams())
    dispatch(getUser())
    setItems(tasks)
   },[])

   console.log(tasks)

   const handlEFilterChnage = (val,type) => {
        if(type == "days")
        {
            if(val == " ")
            {
                setItems(tasks)
            }
            else if(val == "Increasing")
            {
                const items = [...tasks].sort((a,b) => a.timeToComplete - b.timeToComplete)
                setItems(items)
            }
            else
            {
                const items = [...tasks].sort((a,b) => b.timeToComplete - a.timeToComplete)
                setItems(items)
            }
        }
        else 
          {
            if(val == " ")
            {
                setItems(tasks)
            }
            else
            {
                const items = tasks.filter((task) => task.team.name == val)
                setItems(items)
            }
             
        }
   }
    return(
        <div className="container py-4">
        { projects.length > 0 &&  <h1 className="text-center">Project Name - {projects[0].name}</h1>}
            <div className="row">
                <div className="col-3 m-4">
                    <h3 className="text-center">Side Bar</h3>
                    <ul className="list-group">
                        <li className="list-group-item"><Link to="/dashboard">Back to Dashboard</Link></li>
                    </ul>
                </div>
                <div className="col">
                    <h3 className="text-center">Task List</h3>
                    <ul className="list-group">
                        <li className="list-group-item">
                        {filterItems.length == 0 ? <p>No Tasks in this particular filter</p> : 
                        filterItems.map((t) => (
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
                            <Link to="/taskcreate" className="btn btn-primary">Add new Task</Link>
                        </li>
                        <li className="list-group-item">
                            <label>Filter By:</label>
                                    <label>Teams:</label>
                                    <select onChange={(e) => handlEFilterChnage(e.target.value,"team") } className="form-select">
                                        <option value=" ">Default</option>
                                        {teams.map((team) => <option value={team.name}>{team.name}</option>)}
                                    </select>
                        </li>

                        <li className="list-group-item">
                                <p>Sort By time to complete: </p>
                                <select onChange={(e) => handlEFilterChnage(e.target.value,"days")} className="form-select">
                                    <option value=" ">Default</option>
                                    <option value="Increasing">Increasing</option>
                                    <option value="Decreasing">Decreasing</option>
                                </select>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Teams