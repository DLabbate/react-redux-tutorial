import styles from "./styles/TodoItem.module.css";

interface Props {
  id: string;
  description: string;
  completed: boolean;
}

const TodoItem = ({ id, description, completed }: Props) => {
  return (
    <div className={styles["todo-item"]}>
      <input
        className={styles["todo-checkbox"]}
        type={"checkbox"}
        checked={completed}
        onChange={() => {}}
      />
      <span className={styles["todo-text"]}>{description}</span>
      <button className={styles["todo-delete"]} onClick={() => {}}>
        DELETE
      </button>
    </div>
  );
};

export default TodoItem;
