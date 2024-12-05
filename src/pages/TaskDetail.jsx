const TaskDetail = () =>{
    return(
        <div className="container py-4">
            <h1 className="text-center">"Task: [Task Name]"</h1>
            <div className="row">
                <div className="col-3 m-4">
                    <h3 className="text-center">Sidebar</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Back to Project</li>
                    </ul>
                </div>
                <div className="col">
                    <h3 className="text-center">Task Details</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Project -- jhgkudsgf</li>
                        <li className="list-group-item">Team -- jhgkudsgf</li>
                        <li className="list-group-item">Owners -- jhgkudsgf</li>
                        <li className="list-group-item">Tags -- jhgkudsgf</li>
                        <li className="list-group-item">Due Date -- jhgkudsgf</li>
                    </ul>
                    <p>Status -- </p>
                    <p>Status -- </p>
                    <button className="btn ">Mark as button</button>
                </div>
            </div>
        </div>
    )
}

export default TaskDetail