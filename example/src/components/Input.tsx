import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import styles from "./styles/Input.module.css";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div className={styles["input-container"]}>
      <input
        className={styles["input-form"]}
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        placeholder={"✏️ Enter new todo here..."}
        maxLength={20}
      />
      <button
        className={styles["add-button"]}
        onClick={() => {
          if (input !== "") dispatch(addTodo(input));
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
