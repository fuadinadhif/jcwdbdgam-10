import { type Filters } from "../types/todo";
import { useTodo } from "../hooks/use-todo";

const filters: Filters[] = ["ALL", "ACTIVE", "COMPLETED"];

export default function TodoFilter() {
  const { filter, setFilter } = useTodo();

  return (
    <div>
      {filters.map((f) => (
        <button key={f} disabled={filter === f} onClick={() => setFilter(f)}>
          {f}
        </button>
      ))}
    </div>
  );
}
