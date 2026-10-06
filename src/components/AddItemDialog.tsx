import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { taskApi } from "../lib/api/taskApi";
import {
  PRIORITIES,
  STATUSES,
  type CreateTask,
  type Priority,
  type Status,
} from "../types/task.type";
import SelectFilter from "./SelectFilter";

interface Props {
  open: boolean;
  onClose: () => void;
  refetch: () => void;
}

export default function AddItemDialog({ open, onClose, refetch }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [status, setStatus] = useState<Status>("Todo");

  const submit = () => {
    const cleanedTitle = title.trim();
    if (!cleanedTitle) return;

    const payload: CreateTask = {
      title: cleanedTitle,
      description: description.trim(),
      priority,
      status,
    };

    taskApi.create(payload);
    setTitle("");
    setDescription("");
    onClose();
    refetch();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Новий елемент</DialogTitle>
      <DialogContent sx={{ display: "grid", gap: 2 }}>
        <TextField
          autoFocus
          label="Назва"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Опис"
          fullWidth
          multiline
          minRows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <SelectFilter
          value={priority}
          label="Приоретет"
          onChange={setPriority}
          items={PRIORITIES}
        />
        <SelectFilter
          value={status}
          onChange={setStatus}
          label="Статус"
          items={STATUSES}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Скасувати</Button>
        <Button
          onClick={submit}
          disabled={!title.trim()}
          sx={{ color: "#7b1fa2" }}
        >
          Зберегти
        </Button>
      </DialogActions>
    </Dialog>
  );
}
