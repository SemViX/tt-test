import { Card, CardContent, Typography } from "@mui/material";
import dayjs from "dayjs";
import type { Task } from "../types/task.type";

export default function ItemCard({ item }: { item: Task }) {
  return (
    <Card data-testid="item-card">
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
    </Card>
  );
}
