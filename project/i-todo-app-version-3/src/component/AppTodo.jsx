import { useState } from "react"

function AppTodo({onNewItem}) {
    const [todoName, setTodoName] = useState('')
    const [DueDate, setDueDate] = useState('')

    const handleNameChange = (event) => {
        setTodoName(event.target.value)
    }

    const handleDateChange = (event) => {
        setDueDate(event.target.value)
    }

    const handleAddButtonClicked = () => {
        onNewItem(todoName, DueDate)
        setDueDate('')
        setTodoName('')
    }
    
    return <div className="row kg-row width">
        <div className="col-6">
            <input type="text" value={todoName} placeholder="Enter todo here" onChange={handleNameChange} />
        </div>
        <div className="col-4">
            <input type="date" value={DueDate} onChange={handleDateChange}/>
        </div>
        <div className="col-2">
            <button className="btn btn-success kg-button" onClick={handleAddButtonClicked}>Add</button>
        </div>
    </div>
}

export default AppTodo