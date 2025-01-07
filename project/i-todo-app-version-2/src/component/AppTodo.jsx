function AppTodo() {
    return <div className="row kg-row width">
        <div className="col-6">
            <input type="text" placeholder="Enter todo here" />
        </div>
        <div className="col-4">
            <input type="date" />
        </div>
        <div className="col-2">
            <button className="btn btn-success kg-button">Add</button>
        </div>
    </div>
}

export default AppTodo