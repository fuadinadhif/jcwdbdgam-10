export interface ITodo {
  id: number;
  description: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date | null;
}

export type Filters = "ALL" | "COMPLETED" | "ACTIVE";

export interface TodoContextValue {
  todos: ITodo[];
  search: string;
  filter: Filters;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<Filters>>;
  addTodo: (desc: string) => void;
  deleteTodo: (id: number) => void;
  toggleStatus: (id: number) => void;
}
