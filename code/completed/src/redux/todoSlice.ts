import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoModel } from "../models";

/*
Define a type for the slice state
Example: 
[
  { id: 1 , description: "go to gym", completed: false},
  { id: 2 , description: "study", completed: true}
]
*/
interface TodoState {
  data: TodoModel[];
}

const initialState: TodoState = {
  data: [],
};

export const todoSlice = createSlice({
  name: "todo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodoItem: TodoModel = {
        id: Date.now().toString(),
        description: action.payload,
        completed: false,
      };
      state.data.push(newTodoItem);
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.data = state.data.filter((todo) => todo.id !== id);
    },

    toggleTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      const todo: TodoModel | undefined = state.data.find(
        (todo) => todo.id === id
      );

      if (todo) todo.completed = !todo.completed;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
