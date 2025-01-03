import { useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"

const TaskDetail = () =>{

    const ID = useParams()
    const {tasks} = useSelector((state) => state.tasks)
    const detail = tasks.find((task) => task._id == ID.id)
    // console.log(detail)

    const [status,setStatus] = useState(detail.status)

    const handleClick = async () =>{
        const respnse = await fetch(`http://localhost:3000/task/${detail._id}`,{
            method:"PUT",
            headers:{
                'Content-Type' : "application/json"
            },
            body: JSON.stringify({status: "complete"})
        })

        if(!respnse.ok)
        {
            console.log("Error")
        }
        else
        {
            setStatus("complete")
            // console.log("Update Successfull")
        }
    }

    return(
        <div className="container py-4">
            <h1 className="text-center mb-3">Task: {detail.name}</h1>
            <div className="row">
                <div className="col-3 m-4">
                    <h3 className="text-center">Sidebar</h3>
                    <ul className="list-group">
                        <li className="list-group-item"><Link to="/dashboard">Back to Project</Link></li>
                    </ul>
                </div>
                <div className="col">
                    <h3 className="text-center">Task Details</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Project -- {detail.project.name}</li>
                        <li className="list-group-item">Team -- {detail.team.name}</li>
                        <li className="list-group-item">Owners -- {detail.owners.map((name) => name.name).join(', ')}</li>
                        <li className="list-group-item">Tags -- {detail.tags.join(',')}</li>
                        <li className="list-group-item">Time needed -- {detail.timeToComplete} days</li>
                    </ul>
                    <p>Status -- {status}</p>
                    <button onClick={handleClick} className="btn btn-primary">Mark as complete</button>
                </div>
            </div>
        </div>
    )
}

export default TaskDetail