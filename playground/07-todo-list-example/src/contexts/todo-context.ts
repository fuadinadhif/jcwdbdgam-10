import { createContext } from "react";
import { type TodoContextValue } from "../types/todo";

export const TodoContext = createContext<TodoContextValue | null>(null);
