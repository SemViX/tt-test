import { Button, Card, CardContent, Typography } from "@mui/material";
import dayjs from "dayjs";
import type { Task } from "../types/task.type";
import { taskApi } from "../lib/api/taskApi";

interface Props {
  item: Task;
  fetchTasks: () => void
}

export default function ItemCard({ item, fetchTasks }: Props) {
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
      <Button variant="contained" color="error" onClick={onClick}>
        Видалити
      </Button>
    </Card>
  );
}
