import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../redux/todoSlice";
import quoteReducer from "../redux/quoteSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { todos: todosReducer, quotes: quoteReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
