import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import TodoItem from "./TodoItem";
import styles from "./styles/TodoList.module.css";
import { TodoModel } from "../models";

const TodoList = () => {
  const todos: TodoModel[] = useSelector(
    (state: RootState) => state.todos.data
  );
  return (
    <div className={styles["todo-list"]}>
      {todos.map((todo: TodoModel) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          description={todo.description}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default TodoList;
