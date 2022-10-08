import { useState } from "react";

import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
