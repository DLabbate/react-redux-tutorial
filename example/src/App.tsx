import "./App.css";
import Input from "./components/Input";
import Quote from "./components/Quote";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Quote />
      <Input />
      <TodoList />
    </div>
  );
}

export default App;
