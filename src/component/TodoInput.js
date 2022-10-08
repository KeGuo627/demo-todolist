import { useState } from "react";

const TodoInput = ({ todos, setTodos }) => {
  const [text, setText] = useState("");
  console.log(text);

  const addTodo = () => {
    if (!text.trim()) {
      alert("please enter a Todo task");
      setText("");
      return;
    }
    const newTodo = {
      content: text,
    };
    setTodos([...todos, newTodo]);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
