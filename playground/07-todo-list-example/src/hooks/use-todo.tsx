import { useContext } from "react";
import { TodoContext } from "../contexts/todo-context";

export function useTodo() {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error("useTodo must be used inside TodoProvider");
  return ctx;
}
