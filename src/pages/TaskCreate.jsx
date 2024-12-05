const TaskCreate = () =>{
    return(
        <div className="contianer py-4">
            <h1 className="text-center">Create New Task for "Projcet Name"</h1>
            <div>
                <label>Task Name</label>
                <input type="text"></input><br></br>
                <label>Team</label>
                <select>
                    <option>Team Names 1</option>
                    <option>Team Names 2</option>
                    <option>Team Names 3</option>
                </select><br></br>
                <label>Owners</label>
                <input type="checkbox">Owner Name</input>
                <input type="checkbox">Owner Name</input>
                <input type="checkbox">Owner Name</input>
                <br></br>
                <label>Tags</label>
                <input type="checkbox">Tag Name</input>
                <input type="checkbox">Tag Name</input>
                <input type="checkbox">Tag Name</input>
                <br></br>
                <label>Due Date</label>
                <input type="date"></input><br></br>
                <label>Time (Days): </label>
                <input type="date"></input><br></br>
                <button>Create Task Button</button>
            </div>
        </div>
    )
}

export default TaskCreate