import { useEffect, useState } from "react";
import { type ITodo, type Filters } from "../types/todo";
import { TodoContext } from "../contexts/todo-context";

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<ITodo[]>(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filters>("ALL");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(desc: string) {
    const newTodo: ITodo = {
      id: todos[todos.length - 1]?.id + 1 || 1,
      description: desc,
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: null,
    };
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  function toggleStatus(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted, updatedAt: new Date() }
          : todo
      )
    );
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        search,
        filter,
        setSearch,
        setFilter,
        addTodo,
        deleteTodo,
        toggleStatus,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
