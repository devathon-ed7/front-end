import { Box } from "@mui/material";
import { Breadcrumb } from "../components/Breadcrumb";
import { Users } from "../components/Users/Users";
import { UsersProvider } from "../dashboard/contexts/Users/Users.provider";
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
