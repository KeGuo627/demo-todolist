import TodoItem from "./TodoItem";
const TodoList = ({ todos, setTodos }) => {
  const todolist = todos.map((todo, index) => {
    return (
      <TodoItem
        key={index}
        content={todo.content}
        index={index}
        setTodos={setTodos}
      />
    );
  });
  return <ol>{todolist}</ol>;
};
export default TodoList;
