import AppName from "./component/AppName"
import AppTodo from "./component/AppTodo"
import TodoItems from "./component/TodoItems"
import WelcomeMessage from "./component/welcomeMessage"
import "./App.css"
import { useState } from "react"

function App() {

  const [todoItems, setTodoItems] = useState([])

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item added: ${itemName} Dated: ${itemDueDate}`);
    const newTodoItem = [...todoItems, {
      name: itemName,
      dueDate: itemDueDate
    }]
    setTodoItems(newTodoItem)
  }

  const handleDeleteItem = (todoitemName) => {
    const newTodoItem = todoItems.filter(item => item.name !== todoitemName)
    setTodoItems(newTodoItem)
  }

  return <center className="todo-container">
    <AppName></AppName>
    <AppTodo onNewItem={handleNewItem}></AppTodo>
    {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
    <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
  </center>
}

export default App;