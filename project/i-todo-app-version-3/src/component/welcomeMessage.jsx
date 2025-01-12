import { useContext } from "react";
import styles from "./welcomeMessage.module.css"
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
    const {todoItems} =  useContext(TodoItemsContext)

    return todoItems.length === 0 && <p className={styles.welcome}>Enjoy your day</p>
}

export default WelcomeMessage;