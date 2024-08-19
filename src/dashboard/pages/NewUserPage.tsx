import { Box } from "@mui/material";
import { Breadcrumb } from "../components/Breadcrumb";
import { NewUser } from "../components/newUser/NewUser";

export const NewUserPage = () => {
  return (
    <Box>
      <Breadcrumb />
      <NewUser />
    </Box>
  );
};
