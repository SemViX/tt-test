import { Card, CardContent, Typography } from "@mui/material";
import dayjs from "dayjs";
import type { Item } from "../items";

export default function ItemCard({ item }: { item: Item }) {
  return (
    <Card data-testid="item-card">
      <CardContent>
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Додано: {dayjs(item.createdAt).format("DD.MM.YYYY HH:mm")}
        </Typography>
      </CardContent>
    </Card>
  );
}
