import { useUsers } from "@/hooks/useUsers";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { UserDatagrid } from "./UserDatagrid";
import { UserHeader } from "./UserHeader";

export const Users = () => {
  const { setListUsersDataGrid } = useUsers();
  useEffect(() => {
    setListUsersDataGrid();
  }, []);

  return (
    <Box sx={{ display: "grid", rowGap: "0.625em" }}>
      <UserHeader />
      <UserDatagrid />
    </Box>
  );
};
