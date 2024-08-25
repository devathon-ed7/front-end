import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useMenu } from "@/dashboard/hooks/useMenu";
import { stringAvatar } from "@/utils/stringAvatar";
import BasicMenu from "@/components/BasicMenu";
import { StyledBadge } from "@/components/StyledBadge";
import { useAuthStore } from "@/store/authStore";

export const Header = () => {
  const user = useAuthStore((state) => state.user);
  const currentTime = dayjs().format("hh:mm A");
  const { anchorEl, open, handleClick, handleClose } = useMenu();
  return (
    <Box paddingX={3} py={1} sx={{ borderBottom: "0.25rem solid black" }}>
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
          {user?.profile_filename ? (
            <Avatar
              src={`${user?.profile_filename}`}
              sx={{ border: "2px solid", borderColor: "info.dark" }}
              onClick={handleClick}
            />
          ) : (
            <Avatar
              {...stringAvatar(`${user?.username}`)}
              onClick={handleClick}
            />
          )}
        </StyledBadge>
        <BasicMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
      </Stack>
    </Box>
  );
};
