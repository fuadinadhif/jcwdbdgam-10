import { useState } from "react";
import { useTodo } from "../hooks/use-todo";

export default function AddTodo() {
  const [value, setValue] = useState("");
  const { addTodo } = useTodo();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
