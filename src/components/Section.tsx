import { Paper, type PaperProps } from "@mui/material";

const TONES = {
  red: { bg: "#ffebee", border: "#e53935" },
  green: { bg: "#e8f5e9", border: "#2e7d32" },
  aqua: { bg: "#e0f7fa", border: "#00bcd4" },
};

type Props = PaperProps & {
  tone: keyof typeof TONES;
};

const Section = ({ tone, sx, ...rest }: Props) => {
  return (
    <Paper
      sx={{
        p: 1.5,
        bgcolor: TONES[tone].bg,
        border: `2px solid ${TONES[tone].border}`,
        ...sx,
      }}
      {...rest}
    />
  );
};

export default Section;
