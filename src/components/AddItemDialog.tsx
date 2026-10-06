import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import {
  PRIORITIES,
  STATUSES,
  type CreateTask,
  type Task,
} from "../types/task.type";
import SelectFilter from "./SelectFilter";

interface Props {
  open: boolean;
  onClose: () => void;
  task?:Task | null;
  onSubmit: (data:CreateTask) => Promise<void>
}

const empty_task: CreateTask = {
  title: "",
  description: "",
  priority: "Medium",
  status: "Todo",
};


export default function ItemFormDialog({ open, onClose, task, onSubmit }: Props) {
  const [form, setForm] = useState<CreateTask>(empty_task);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setForm(
      task
        ? {
            title: task.title,
            description: task.description,
            priority: task.priority,
            status: task.status,
          }
        : empty_task,
    );
    setError(null);
  }, [open, task]);

  const submit = async () => {
    const cleanedTitle = form.title.trim();
    if (!cleanedTitle) return;

    setSubmitting(true);
    setError(null)

    try {
      await onSubmit({
        ...form,
        title: form.title.trim(),
        description: form.description.trim(),
      });
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Щось пішло не так");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
        <DialogTitle>{task ? "Редагувати задачу" : "Нова задача"}</DialogTitle>
      <DialogContent sx={{ display: "grid", gap: 2 }}>
        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          autoFocus
          label="Назва"
          fullWidth
          value={form.title}
          onChange={((e) => setForm({ ...form, title: e.target.value }))}
        />
        <TextField
          label="Опис"
          fullWidth
          multiline
          minRows={3}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <SelectFilter
          value={form.priority}
          label="Приоретет"
          onChange={(priority) => setForm({ ...form, priority })}
          items={PRIORITIES}
        />
        <SelectFilter
          value={form.status}
          onChange={(status) => setForm({ ...form, status })}
          label="Статус"
          items={STATUSES}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Скасувати</Button>
        <Button
          onClick={submit}
          disabled={!form.title.trim()}
          sx={{ color: "#7b1fa2" }}
        >
            {submitting ? "Збереження..." : "Зберегти"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
