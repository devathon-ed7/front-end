import { Box } from "@mui/material";
import { Breadcrumb } from "../components/Breadcrumb";
import { Users } from "../components/users/Users";
import { UsersProvider } from "../contexts/Users/Users.provider";
export const UserPage = () => {
  return (
    <Box>
      <Breadcrumb />
      <UsersProvider>
        <Users />
      </UsersProvider>
    </Box>
  );
};
