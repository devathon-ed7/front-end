import { Box } from '@mui/material';
import React from 'react';

interface Props {
  children: React.ReactNode;
}
export const NavSection = ({ children }:Props) => (
    <Box
      sx={{
        display: "flex",
        gap: "3px",
        flexDirection: "column",
        padding: "1em",
        backgroundColor: "#252627",
        flexGrow: 1,
        overflowY: "auto",
      }}
    >
      {children}
    </Box>
  );