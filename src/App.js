import { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      value: "",
    };
  }

  onAddTask = (e) => {
    e.preventDefault();
    const obj = {
      name: this.state.value,
      isCompleted: false,
      id: Math.floor(Math.random() * 1000),
    };
    console.log(obj);
    if (this.state.value !== "") {
      this.setState({
        todos: this.state.todos.concat(obj),
      });
      this.setState({ value: "" });
    }
  };

  onDeleteTask = (itemId) => {
    this.setState({
      todos: [...this.state.todos].filter((item) => item.id !== itemId),
    });
  };

  onToggle = (itemId) => {
    const todos = [...this.state.todos];
    todos.map((todo) => {
      if (todo.id === itemId) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });

    this.setState({ todos });
  };

  render() {
    const mylist = this.state.todos.map((todo) => (
      <li
        key={todo.id}
        className={todo.isCompleted ? "task-done" : "task-incompleted"}
        onDoubleClick={() => {
          this.onToggle(todo.id);
        }}
      >
        {todo.name}
        <button onClick={() => this.onDeleteTask(todo.id)}>Delete</button>
      </li>
    ));

    return (
      <>
        <div className="App">
          <form>
            <input
              placeholder="todo"
              value={this.state.value}
              onChange={(e) => {
                this.setState({ value: e.target.value });
              }}
            />
            <button onClick={this.onAddTask}>Add Item</button>
          </form>
          <ol className="todo-wrapper">{mylist}</ol>
        </div>
      </>
    );
  }
}
export default App;
