const Management = () =>{
    return(
        <div className="container py-4">
            <h1 className="text-center">Project "Name"</h1>
            <div className="row">
                <div className="col-3 m-4">
                    <h3 className="text-center">Side Bar</h3>
                    <ul className="list-group-item">
                        <li className="list-group-item">Back to Dashboard</li>
                    </ul>
                </div>
                <div className="col">
                    <h3 className="text-center">Task List</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Task 1 - "[status]"</li>
                        <li className="list-group-item">Task 2 - "[status]"</li>
                        <li className="list-group-item">Task 3 - "[status]"</li>
                        <li className="list-group-item">Add new task</li>
                        <li className="list-group-item">Filter by</li>
                        <li className="list-group-item">Sort by by</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Management