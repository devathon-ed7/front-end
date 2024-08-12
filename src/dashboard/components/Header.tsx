import { Box, Stack, Avatar, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import dayjs from "dayjs";
import { StyledBadge } from "./StyledBadge";
import { stringAvatar } from "../utils/stringAvatar";
import BasicMenu from "./BasicMenu";
import { useMenu } from "../hooks/useMenu";

export const Header = () => {
  const currentTime = dayjs().format("hh:mm A");
  const { anchorEl, open, handleClick, handleClose } = useMenu();
  return (
    <Box
      paddingX={3}
      paddingBottom={1}
      sx={{ borderBottom: "0.25rem solid black" }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <AccessTimeIcon />
          <Typography
            marginLeft={1}
            sx={{ fontSize: "extra", fontWeight: 600 }}
          >
            {currentTime}
          </Typography>
        </Box>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          sx={{ cursor: "pointer" }}
        >
          <Avatar {...stringAvatar("Raydberg")} onClick={handleClick} />
        </StyledBadge>
        <BasicMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
      </Stack>
    </Box>
  );
};
