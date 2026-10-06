import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import type { Task } from "../types/task.type";
import { taskApi } from "../lib/api/taskApi";
import { useState } from "react";
import ItemFormDialog from "./AddItemDialog";
import { useItems } from "../hooks/useItems";

interface Props {
  item: Task;
  fetchTasks: () => void
}

export default function ItemCard({ item, fetchTasks }: Props) {
  const [editing, setEditing] = useState<boolean>(false)
  const {updateItem} = useItems()
  const onClick = async () => {
    await taskApi.delete(item.id)
    await fetchTasks()
  }
  return (
    <Card data-testid="item-card" sx={{p:1}}>
      <CardContent>
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Статуc: {item.status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Приоритет: {item.priority}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Додано: {dayjs(item.createdAt).format("DD.MM.YYYY HH:mm")}
        </Typography>
      </CardContent>
      <Stack sx={{flexDirection:"row", gap:1}}>
        <Button variant="contained" color="error" onClick={onClick}>
          Видалити
        </Button>
        <Button variant="contained" onClick={() => setEditing((prev) => !prev)}>
          Редагувати
        </Button>
      </Stack>
      <ItemFormDialog open={editing} onSubmit={(data) => updateItem(item.id, data)} onClose={() => setEditing(false)} task={item}/>
    </Card>
  );
}
