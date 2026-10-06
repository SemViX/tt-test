import { Alert, CircularProgress, Stack, Typography } from "@mui/material";
import ItemCard from "./ItemCard";
import Section from "./Section";
import type { Task } from "../types/task.type";

interface Props {
  items: Task[];
  loading: boolean;
  error: string | null;
  fetchTasks: () => void;
}

export default function ItemList({ items, loading, error, fetchTasks }: Props) {
  return (
    <Section tone="aqua">
      {loading ? (
        <Stack sx={{ py: 4, alignItems: "center" }}>
          <CircularProgress />
        </Stack>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : items.length === 0 ? (
        <Typography color="text.secondary">Нічого не знайдено.</Typography>
      ) : (
        <Stack spacing={1.5}>
          {items.map((item) => (
            <ItemCard key={item.id} item={item} fetchTasks={fetchTasks}/>
          ))}
        </Stack>
      )}
    </Section>
  );
}
