import type { Dayjs } from "dayjs";
import Section from "./Section";
import { DatePicker } from "@mui/x-date-pickers";

interface Props {
  value: Dayjs | null;
  onChange: (value: Dayjs | null) => void;
}

const DateFilter = ({ value, onChange }: Props) => {
  return (
    <Section
      tone="red"
      sx={{
        width: 180,
        minWidth: 180,
        maxHeight: 90,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <DatePicker
        label="Дата"
        value={value}
        onChange={onChange}
        sx={{ width: "100%" }}
        slotProps={{
          field: { clearable: true, onClear: () => onChange(null) },
          textField: {
            color: "error",
            sx: {
              bgcolor: "#fff",
              width: "100%",
              "& .MuiInputBase-root": {
                minHeight: 38,
              },
              "& .MuiInputBase-input": {
                paddingTop: "8.5px",
                paddingBottom: "8.5px",
              },
            },
          },
        }}
      />
    </Section>
  );
};

export default DateFilter;
