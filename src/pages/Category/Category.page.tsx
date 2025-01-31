import { Box } from "@mui/material";
import { Breadcrumb } from "@/components";
import { CardProductLayout } from "@/layouts";

export const CategoryPage = () => {
  return (
    <Box>
      <Breadcrumb />
      <CardProductLayout
        name="Nombre"
        stock={200}
        category="categoria"
        imageUrl=""
        price={"20"}
      />
    </Box>
  );
};
