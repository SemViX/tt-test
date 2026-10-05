import { useMemo, useState } from "react";
import dayjs, { type Dayjs } from "dayjs";
import { createInitialItems, filterItems, type Item } from "../items";

export function useItems() {
  const [items, setItems] = useState<Item[]>(createInitialItems);
  const [query, setQuery] = useState("");
  const [date, setDate] = useState<Dayjs | null>(null);

  const visible = useMemo(
    () => filterItems(items, query, date),
    [items, query, date],
  );

  const addItem = (title: string, description?: string) =>
    setItems((prev) => [
      {
        id: Date.now(),
        title,
        description: description?.trim() || "Новий елемент",
        createdAt: dayjs().toISOString(),
      },
      ...prev,
    ]);

  return { visible, date, setDate, setQuery, addItem };
}
