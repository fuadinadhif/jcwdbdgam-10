// import "./App.css";
import { TodoProvider } from "../providers/TodoProvider";
import SearchTodo from "../components/SearchTodo";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import TodoFilter from "../components/TodoFilter";

export default function ContextPage() {
  return (
    <TodoProvider>
      <main>
        <h1>Simple Todo List</h1>
        <SearchTodo />
        <AddTodo />
        <TodoList />
        <TodoFilter />
      </main>
    </TodoProvider>
  );
}
