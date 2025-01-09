import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Reports = () =>{
    const [total,setTotal] = useState(0)
    const [pending,setPending] = useState(0)
    const[complete,setComp] = useState(0)
    const[taksC,setTaskC] = useState(0)
    const { tasks } = useSelector((state) => state.tasks);
    console.log(tasks)

    useEffect(() =>{
        if(tasks)
            {
                // console.log(tasks)
                let tots = tasks.reduce((acc,curr) =>acc+=curr.timeToComplete,0)
                setTotal(tots)
        
                let done = tasks.reduce((acc,curr) => curr.status == "complete" ? acc+=curr.timeToComplete:acc  ,0)
                setComp(done)
        
                setPending(total - complete)

                let tDone = tasks.reduce((acc,curr) => curr.status == "complete" ? acc+=1 :acc  ,0)
                setTaskC(tDone)
            }
    } ,[])
   console.log(total,pending,complete)
    return(
        <div className="container py-4">
            <h1 className="text-center">Workasana Reports</h1>
            <div className="row">
                <div className="col-4 m-4">
                    <h3 className="text-center">Sidebar</h3>
                    <ul className="list-group">
                        <li className="list-group-item"><Link to="/dashboard">Back to Dashboard</Link></li>
                    </ul>
                </div>
                <div className="col mt-4">
                <h3 className="text-center">Report Overview</h3>
                    <ul className="list-group">
                        <li className="list-group-item"><b>Total (Hours of ) Work Done by Last Week: </b>{complete} hrs </li>
                        <li className="list-group-item"><b>Total Days of Works Pending: </b>{pending}</li>
                        <li className="list-group-item"><b>Tasks Closed by Team: </b>{taksC}</li>
                    </ul>
                    <p><b>Tasks CLosed by Owner: </b>{null}</p>
                </div>
            </div>
        </div>
    )
}

export default Reports