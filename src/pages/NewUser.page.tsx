import { Box } from "@mui/material";
import { Breadcrumb } from "../components/Breadcrumb";
import { NewUser } from "@/components/Users/NewUser";

export const NewUserPage = () => {
  return (
    <Box>
      <Breadcrumb />
      <NewUser />
    </Box>
  );
};
