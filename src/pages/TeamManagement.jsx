


const TeamManagement = () =>{
    return(
        <div className="container">
            <h1 className="text-center">Team Management</h1>
                <div className="row">
                    <div className="col-4 m-4">
                        <h3 className="text-center">Sidebar</h3>
                        <ul className="list-group">
                            <li className="list-group-item">Back to Dashboard</li>
                        </ul>
                    </div>
                    <div className="col">
                    <h3 className="text-center">Report Overview</h3>
                        <ul className="list-group">
                            <li className="list-group-item">Team: </li>
                            <li className="list-group-item">Team: </li>
                        </ul>
                        <button className="btn btn-info">Add a new Team </button>
                    </div>
                </div>
        </div>
    )
}

export default TeamManagement