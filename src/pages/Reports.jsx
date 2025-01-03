import { Link } from "react-router-dom"
const Reports = () =>{
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
                        <li className="list-group-item">Total Work Done by Last Week: </li>
                        <li className="list-group-item">Total Days of Works Pending: </li>
                        <li className="list-group-item">Tasks Closed by Team</li>
                    </ul>
                    <p>Tasks CLosed by Owner</p>
                </div>
            </div>
        </div>
    )
}

export default Reports