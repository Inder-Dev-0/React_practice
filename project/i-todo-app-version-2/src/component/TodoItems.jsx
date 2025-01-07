import TodoItem from "./TodoItem"
import styles from "./TodoItems.module.css"
const TodoItems = ({todoItems}) => {
    return <>
        <div className={styles.itemContainer}>
            {todoItems.map(item => <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>)}
        </div>
    </>
}

export default TodoItems;