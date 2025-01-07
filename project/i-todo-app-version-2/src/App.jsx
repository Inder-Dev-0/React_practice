import AppName from "./component/AppName"
import AppTodo from "./component/AppTodo"
import TodoItems from "./component/TodoItems"
import "./App.css"

function App(){
  const todoItem = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023"
    },
    {
      name: "Go to Collage",
      dueDate: "4/10/2023"
    },
    {
      name: "Like this video",
      dueDate: "right now"
    },
]

  return <center className="todo-container">
    <AppName></AppName>
    <AppTodo></AppTodo>
    <TodoItems todoItems={todoItem}></TodoItems>
  </center>
}

export default App;