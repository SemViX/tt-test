import { useEffect, useMemo, useState } from "react";
import dayjs, { type Dayjs } from "dayjs";
import type { CreateTask, Priority, Status, Task } from "../types/task.type";
import { taskApi } from "../lib/api/taskApi";

export function useItems() {
  const [items, setItems] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [date, setDate] = useState<Dayjs | null>(null);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<Status | "All">("All");
  const [priority, setPriority] = useState<Priority | "All">("All");

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await taskApi.getList();
      setItems(data);
    } catch {
      setError("Не вдалося завантажити задачі");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchTasks();
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const byText =
        !q ||
        (item.title ?? "").toLowerCase().includes(q) ||
        (item.description ?? "").toLowerCase().includes(q);
      const byDate = !date || dayjs(item.createdAt).isSame(date, "day");

      const byStatus = status === "All" || item.status === status;
      const byPriority = priority === "All" || item.priority === priority;

      return byText && byDate && byStatus && byPriority;
    });
  }, [items, query, date, status, priority]);

  const updateItem = async (id: number, data: Partial<CreateTask>) => {
    await taskApi.edit(id, data);
    await fetchTasks();
  };

  const addItem = async (input: CreateTask) => {
    await taskApi.create(input);
    await fetchTasks()
  };

  return {
    visible,
    items,
    date,
    setDate,
    setQuery,
    error,
    fetchTasks,
    loading,
    setPriority,
    setStatus,
    priority,
    status,
    updateItem,
    addItem
  };
}
