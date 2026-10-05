import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
  onAdd: (title: string, description?: string) => void;
}

export default function AddItemDialog({ open, onClose, onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = () => {
    const cleanedTitle = title.trim();
    if (!cleanedTitle) return;

    onAdd(cleanedTitle, description);
    setTitle("");
    setDescription("");
    onClose();
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
