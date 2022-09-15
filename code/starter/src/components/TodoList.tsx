import TodoItem from "./TodoItem";
import styles from "./styles/TodoList.module.css";
import { TodoModel } from "../models";

const todos: TodoModel[] = [
  { id: "1", description: "Go to gym.", completed: false },
  { id: "2", description: "Study", completed: true },
];

const TodoList = () => {
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
