import { useTodo } from "../hooks/use-todo";

export default function SearchTodo() {
  const { search, setSearch } = useTodo();

  return (
    <input
      type="text"
      placeholder="Search todo..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
