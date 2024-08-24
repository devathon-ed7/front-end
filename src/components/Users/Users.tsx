import { useUsers } from "@/hooks/useUsers";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { UserDatagrid } from "@/components/Users/UserDatagrid";
import { UserHeader } from "@/components/Users/UserHeader";

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
