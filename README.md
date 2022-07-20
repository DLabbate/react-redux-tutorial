# What is Redux, Redux Toolkit, and Redux Saga?

<br/>

🎯 The objective of this document is to give a high level overview of

1. `Redux`
2. `Redux Toolkit`
3. `Redux Saga`

In the [references](#references) section you will find a list of useful resources that inspired these notes. If you want a deeper dive of the material, or a more comprehensive article, I highly recommend you have a look!

<br/>

## Table of Contents

- [Redux](#redux)
  - [What is Redux?](#what-is-redux)
  - [When to Use Redux?](#when-to-use-redux)
  - [When Not to Use Redux?](#when-not-to-use-redux)
  - [Redux Concepts](#redux-concepts)
    - [Store](#store)
    - [Action](#action)
    - [Reducers](#reducers)
- [Redux Toolkit](#redux-toolkit)
  - [What Is Redux Toolkit?](#what-is-redux-toolkit)
  - [Redux Toolkit Overview](#redux-toolkit-overview)
  - [Redux Toolkit Notes](#🗒️-redux-toolkit-notes)
- [Redux Saga](#redux-saga)
  - [What is Redux Saga?](#what-is-redux-saga)
  - [Middleware Diagram](#middleware-diagram)
  - [Redux Saga Overview](#redux-saga-overview)
  - [Redux Saga Notes](#🗒️-redux-saga-notes)
- [References](#references)

<br/>

## Redux

<br/>

### What is Redux?

The main idea behind Redux can be summarized by the following:

💡 _Redux allows you to manage your app's state in a single place._

<br/>

### When to Use Redux?

> Redux is more useful when:
>
> 1. You have large amounts of application state that are needed in many places in the app
> 2. The app state is updated frequently
> 3. The logic to update that state may be complex
> 4. The app has a medium or large-sized codebase, and might be worked on by many people
> 5. You need to see how that state is being updated over time

🔗 [Redux FAQ: General](https://redux.js.org/faq/general)

<br/>

### When Not to Use Redux?

> Redux helps you deal with shared state management, but like any tool, it has tradeoffs. It's not designed to be the shortest or fastest way to write code. It's intended to help answer the question "When did a certain slice of state change, and where did the data come from?", with predictable behavior. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity.

🔗 [Redux FAQ: General](https://redux.js.org/faq/general)

<br/>

### Redux Concepts

<img src="https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif" width=500>

[🔗 Redux Essentials, Part 1: Redux Overview and Concepts](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)

🔗 [Redux Fundamentals, Part 2: Concepts and Data Flow](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow)

_What's going on here?_

1. Something happens in the app, such as a user clicking a button
2. The app code dispatches an action to the Redux store, like dispatch({type: 'counter/increment'})
3. The store runs the reducer function again with the previous state and the current action, and saves the return value as the new state
4. The store notifies all parts of the UI that are subscribed that the store has been updated
5. Each UI component that needs data from the store checks to see if the parts of the state they need have changed.
6. Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen

<br/>

#### Store

The current Redux application state lives in an object called the `store`

<br/>

#### Action

The actions, the events that occur in the app based on user input, and trigger updates in the state

An `action` is a plain JavaScript object that typically has the following fields:

- `type` The type field should be a string that gives this action a descriptive name,

- `payload` additional information about what happened.

```js
const addTodoAction = {
  type: "todos/todoAdded",
  payload: "Buy milk",
};
```

<br/>

#### Reducers

A `reducer` is a function that receives the current `state` and an `action` object, decides how to update the state. You can think of a `reducer` as an event listener which handles events based on the received action (event) type.

```js
(state, action) => newState;
```

<br/>

## Redux Toolkit

<br/>

### What Is Redux Toolkit?

The Redux Toolkit package is intended to be the standard way to write Redux logic.

💡 _In essence, it makes writing Redux logic much easier._

A great link on getting started with Redux Toolkit can be found here:
🔗 [Redux Toolkit Quick Start](https://redux-toolkit.js.org/tutorials/quick-start)

<br/>

### Redux Toolkit Overview

`features/counter/counterSlice.js`

```ts
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```

<br/>

### 🗒️ Redux Toolkit Notes

- The main idea behind redux toolkit is to create a 🍕 `slice` of state, by providing the following:
  - A string `name` to identify the slice
  - An `initialState` value
  - One or more `reducers` (functions) to define how the state can be updated

Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice!

<br/>

## Redux Saga

</br>

### What Is Redux Saga?

> redux-saga is a redux middleware

> redux-saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

💡 _In essence, it is a tool to help us manage asynchronous tasks, such as data fetching!_

🔗 [About Redux-Saga](https://redux-saga.js.org/docs/About)

<br/>

### Middleware Diagram

<img src="https://d33wubrfki0l68.cloudfront.net/08d01ed85246d3ece01963408572f3f6dfb49d41/4bc12/assets/images/reduxasyncdataflowdiagram-d97ff38a0f4da0f327163170ccc13e80.gif" width=500/>

_So how do middleware and async logic affect the overall data flow of a Redux app?_

1. Just like with a normal action, we first need to handle a user event in the application, such as a click on a button.
2. Then, we call `dispatch()`, and pass in something, such as a plain action object.
3. Once that dispatched value reaches a `middleware`, it can make an async call, and then dispatch an action when the async call completes.

💡 _To summarize, when we add async logic to a Redux app, we add an extra step where middleware can run logic like data fetching requests, then dispatch actions._

🔗 [Redux Fundamentals, Part 6: Async Logic and Data Fetching](https://redux.js.org/tutorials/fundamentals/part-6-async-logic)

<br/>

### Redux Saga Overview

```js
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import Api from "...";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const user = yield call(Api.fetchUser, action.payload.userId);
    yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
```

<br/>

### 🗒️ Redux Saga Notes

- Redux Saga is composed primarily of two parts:
  - `Watcher Saga` will watch for dispatched actions and fork a worker
  - `Worker Saga` will handle the action and terminate
- Sagas are implemented as 🔗 [Generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) that `yield` objects to the redux-saga middleware.
  - The yielded objects are a kind of instruction to be interpreted by the middleware.
  - When a `Promise` is yielded to the middleware, the middleware will suspend the Saga until the Promise completes.
- `call(fn, ...args)` instructs the middleware call the function `fn` with `args` as arguments.
  - As illustrated above, we can use `yield call(fn, ...args)` to make an async data `fetch` and wait for the response.
- `put(action)` instructs the middleware to schedule the dispatching of an action to the store.

🔗 [Redux Saga (API Reference)](https://redux-saga.js.org/docs/api/)

<br/>

## References

| Category        | Link                                                                                                                        |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Redux (General) | [Redux FAQ: General](https://redux.js.org/faq/general)                                                                      |
| Redux (General) | [Redux Fundamentals, Part 1: Redux Overview](https://redux.js.org/tutorials/fundamentals/part-1-overview)                   |
| Redux (General) | [Redux Fundamentals, Part 2: Concepts and Data Flow](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow) |
| Redux Toolkit   | [Redux Toolkit Quick Start](https://redux.js.org/tutorials/quick-start)                                                     |
| Redux Saga      | [About Redux-Saga](https://redux-saga.js.org/docs/About)                                                                    |
| Redux Saga      | [Redux Fundamentals, Part 6: Async Logic and Data Fetching](https://redux.js.org/tutorials/fundamentals/part-6-async-logic) |
| Redux Saga      | [Generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)               |
| Redux Saga      | [Redux Saga (API Reference)](https://redux-saga.js.org/docs/api/)                                                           |
