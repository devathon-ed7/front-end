import { Box } from "@mui/material";
import { Users } from "@/components/Users/Users";
import { UsersProvider } from "@/dashboard/contexts/Users/Users.provider";
export const UserPage = () => {
  return (
    <Box>
      <UsersProvider>
        <Users />
      </UsersProvider>
    </Box>
  );
};
