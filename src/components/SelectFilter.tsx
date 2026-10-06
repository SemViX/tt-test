import { MenuItem, Select, type SelectChangeEvent } from "@mui/material";

interface Props<T extends string> {
  label: string;
  value: T;
  onChange: (value: T) => void;
  items: readonly T[];
}

export default function SelectFilter<T extends string>({
  value,
  onChange,
  items,
  label,
}: Props<T>) {
  const handleChange = (event: SelectChangeEvent<T>) => {
    onChange(event.target.value as T);
  };
  return (
    <Select
      value={value}
      label={label}
      onChange={handleChange}
      fullWidth
    >
      {items.map((i) => (
        <MenuItem key={i} value={i}>
          {i}
        </MenuItem>
      ))}
    </Select>
  );
}
