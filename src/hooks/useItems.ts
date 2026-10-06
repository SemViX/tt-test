import { useEffect, useState } from "react";
import { type Dayjs } from "dayjs";
import type { Task } from "../types/task.type";
import { taskApi } from "../lib/api/taskApi";

export function useItems() {
  const [items, setItems] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [query, setQuery] = useState("");
  const [date, setDate] = useState<Dayjs | null>(null);

  const fetchTasks = async () => {
    try{
      setLoading(true)
      setError(null)
      const data = await taskApi.getList()
      setItems(data)
    }
    catch{
      setError("Не вдалося завантажити задачі")
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchTasks()
  }, [])

  return { items, date, setDate, setQuery, error, fetchTasks, loading };
}
