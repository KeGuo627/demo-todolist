const TodoItem = ({ content, index, setTodos }) => {
  const delTodo = (index) => {
    setTodos((prev) => {
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };
  return (
    <li>
      <span>{content}</span>
      <span>
        <button
          onClick={() => {
            delTodo(index);
          }}
        >
          Delete
        </button>
      </span>
    </li>
  );
};
export default TodoItem;
