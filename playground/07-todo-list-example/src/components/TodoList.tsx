import { useTodo } from "../hooks/use-todo";

export default function TodoList() {
  const { todos, search, filter, toggleStatus, deleteTodo } = useTodo();

  const filteredTodos = todos.filter((todo) => {
    const matchFilter =
      filter === "ALL"
        ? true
        : filter === "COMPLETED"
        ? todo.isCompleted
        : !todo.isCompleted;

    const matchSearch = todo.description
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => toggleStatus(todo.id)}
          />
          <span
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
          >
            {todo.description}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
}
