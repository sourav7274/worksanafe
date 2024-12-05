const Dashboard = () =>{
    return(
        <div className="container">
            <h1 className="text-center">WorkSana Dashboard</h1>
            <div>
                <div className="col-3 m-4">
                    <div className="sidebar">
                        <h2>SideBar</h2>
                        <ul className="list-group">
                            <li className="list-group-item">Projects</li>
                            <li className="list-group-item">Teams</li>
                            <li className="list-group-item">Reports</li>
                            <li className="list-group-item">Settings</li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <h2>Main Content</h2>
                    <ul className="list-group">
                        <li className="list-group-item"> "Project Names" </li>
                        <li className="list-group-item"> ---------------------- </li>
                        <li className="list-group-item">My Tasks </li>
                        <li className="list-group-item"> "Settings" </li>
                        <li className="list-group-item"> Add New Task</li>
                        <li className="list-group-item"> Quick Filters </li>
                    </ul>
                </div>
            </div>
           
        </div>
    )
}

export default Dashboard