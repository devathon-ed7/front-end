import { ReactNode } from "react";
import { Typography } from "@mui/material";
import styles from "../../dashboard/styles/CardProductStyles";
interface Props {
  children: ReactNode;
  sx?: object;
}
export const Label = ({ children, sx }: Props) => (
  <Typography variant="caption" sx={{ ...styles.label, ...sx }}>
    {children}
  </Typography>
);
