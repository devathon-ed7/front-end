import { useState, useEffect } from "react";
import { TextField, Box, Button, Typography, Grid } from "@mui/material";
import { CardProductLayout } from "../layout/CardProductLayout";
import { CategorySelect, ImageUploadButton, Breadcrumb } from "../components";
import { useSnackbar } from "notistack";
import productService from "@/dashboard/services/products.service";
import { useProducts } from "@/hooks/useProducts";

export const ProductNew = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const { getCategories, categories } = useProducts();

  useEffect(() => {
    getCategories();
  }, []);

  const handleSave = async () => {
    if (!name || !price || !stock || !category) {
      enqueueSnackbar("Todos los campos son requeridos", { variant: "error" });
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("stock", stock.toString());
    formData.append("category", category);
    formData.append("imageUrl", imageUrl);

    try {
      await productService.newProduct(formData);
      enqueueSnackbar("Producto creado exitosamente", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Error al crear el producto", { variant: "error" });
    }
  };

  return (
    <Box>
      <Breadcrumb />
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <form>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleSave}
                >
                  <Typography color="white" sx={{ fontWeight: "bold" }}>
                    Guardar
                  </Typography>
                </Button>
              </Grid>
              <Grid item>
                <TextField
                  id="name"
                  label="Nombre de producto"
                  onChange={({ target }) => setName(target.value)}
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-number"
                  label="Precio"
                  type="number"
                  onChange={({ target }) => setPrice(target.value)}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ step: "0.01" }}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-number"
                  label="Stock"
                  type="number"
                  onChange={({ target }) =>
                    setStock(target.value === "" ? 0 : parseInt(target.value))
                  }
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item>
                <CategorySelect
                  category={category}
                  setCategory={setCategory}
                  categories={categories}
                />
              </Grid>
              <Grid item>
                <ImageUploadButton onChangeUrl={setImageUrl} />
              </Grid>
            </Grid>
          </form>
        </Box>
        <CardProductLayout
          name={name}
          price={price}
          stock={stock}
          category={category}
          imageUrl={imageUrl}
        />
      </Box>
    </Box>
  );
};
