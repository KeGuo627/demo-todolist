import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      value: "",
      newId: 0,
    };
  }

  onAddTask = (e) => {
    e.preventDefault();
    const obj = {
      name: this.state.value,
      isCompleted: false,
      id: this.state.newId,
    };
    console.log(obj);
    if (this.state.value !== "") {
      this.setState({
        todos: this.state.todos.concat(obj),
        newId: this.state.newId + 1,
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
    const updatedTodos = JSON.parse(JSON.stringify(this.state.todos));
    //console.log(updatedTodos);
    //console.log(itemId);
    updatedTodos[itemId].isCompleted = !updatedTodos[itemId].isCompleted;
    //console.log(updatedTodos[itemId]);

    this.setState({
      todos: updatedTodos,
    });
  };

  render() {
    const mylist = this.state.todos.map((todo) => (
      <li key={todo.id} className={todo.isCompleted ? "task-done" : "task-incompleted"}
        onDoubleClick={() => {
          this.onToggle(todo.id);
        }}>
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
              onClick={this.onToggle}
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
