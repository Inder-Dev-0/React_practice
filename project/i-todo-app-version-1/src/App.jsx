import AppName from "./component/AppName"
import AppTodo from "./component/AppTodo"
import TodoItem1 from "./component/TodoItem1"
import TodoItem2 from "./component/TodoItem2"
import "./App.css"

function App(){
  return <center className="todo-container">
    <AppName></AppName>
    <AppTodo></AppTodo>
    <div className="item-container">
      <TodoItem1></TodoItem1>
      <TodoItem2></TodoItem2>
    </div>
  </center>
}

export default App;