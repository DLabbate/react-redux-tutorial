import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/todoSlice";
import styles from "./styles/TodoItem.module.css";

interface Props {
  id: string;
  description: string;
  completed: boolean;
}

const TodoItem = ({ id, description, completed }: Props) => {
  const dispatch = useDispatch();
  return (
    <div className={styles["todo-item"]}>
      <input
        className={styles["todo-checkbox"]}
        type={"checkbox"}
        checked={completed}
        onChange={() => dispatch(toggleTodo(id))}
      />
      <span className={styles["todo-text"]}>{description}</span>
      <button
        className={styles["todo-delete"]}
        onClick={() => {
          dispatch(removeTodo(id));
        }}
      >
        DELETE
      </button>
    </div>
  );
};

export default TodoItem;
