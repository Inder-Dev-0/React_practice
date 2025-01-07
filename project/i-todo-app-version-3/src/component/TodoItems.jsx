import TodoItem from "./TodoItem"
import styles from "./TodoItems.module.css"
const TodoItems = ({todoItems, onDeleteClick}) => {
    return <>
        <div className={styles.itemContainer}>
            {todoItems.map(item => <TodoItem todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick}></TodoItem>)}
        </div>
    </>
}

export default TodoItems;