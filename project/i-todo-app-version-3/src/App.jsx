import AppName from "./component/AppName"
import AppTodo from "./component/AppTodo"
import TodoItems from "./component/TodoItems"
import WelcomeMessage from "./component/welcomeMessage"
import "./App.css"
import TodoItemsContextProvider from "./store/todo-items-store"

function App() {
  
    // setTodoItems((currValue) =>
    //   [...currValue, {
    //     name: itemName,
    //     dueDate: itemDueDate
    //   }]
    // )

  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AppTodo></AppTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  )
}

export default App;