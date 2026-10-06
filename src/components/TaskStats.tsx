import { Card, Stack, Typography } from "@mui/material";
import type { Task } from "../types/task.type";

type Props = {
  items: Task[];
};

export default function TaskStats({ items }: Props) {
  const stats = {
    total: items.length,
    todo: items.filter((item) => item.status === "Todo").length,
    inProgress: items.filter((item) => item.status === "In Progress").length,
    done: items.filter((item) => item.status === "Done").length,
  };

  const cards = [
    { label: "Total", value: stats.total, color: "#1976d2" },
    { label: "Todo", value: stats.todo, color: "#ff9800" },
    { label: "In Progress", value: stats.inProgress, color: "#9c27b0" },
    { label: "Done", value: stats.done, color: "#2e7d32" },
  ];

  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 3 }}>
      {cards.map((card) => (
        <Card
          key={card.label}
          sx={{
            flex: 1,
            p: 2,
            textAlign: "center",
            background: card.color,
            color: "white",
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Typography variant="caption" sx={{ opacity: 0.9 }}>
            {card.label}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {card.value}
          </Typography>
        </Card>
      ))}
    </Stack>
  );
}