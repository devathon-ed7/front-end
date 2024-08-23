import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useProductStore } from "@/store/dashboard/useproductStore";
import { CardProductLayout } from "../layout/CardProductLayout";
import { ImageUploadButton, CategorySelect, Breadcrumb } from "../components";
import { Product } from "../../interfaces";
interface ChangeEvent {
  target: {
    name: string;
    value: string;
  };
}
export const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, updateProduct } = useProductStore(
    ({ products, updateProduct }) => ({
      products: products,
      updateProduct: updateProduct,
    })
  );

  const [product, setProduct] = useState<any>(null);
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === Number(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setCategory(foundProduct.category);
      setImageUrl(foundProduct.imageUrl);
    }
  }, [id, products]);

  const handleChange = ({ target }: ChangeEvent) => {
    const { name, value } = target;
    setProduct((prev: Product) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const updatedProduct = { ...product, category, imageUrl };
    console.log(updatedProduct);
    updateProduct(updatedProduct);
    navigate("/productos");
  };

  const categorySelect = useMemo(
    () => <CategorySelect category={category} setCategory={setCategory} />,
    [category, setCategory]
  );

  const onChangeUrl = useCallback((url: string) => {
    setImageUrl(url);
  }, []);

  const imageUploadButton = useMemo(
    () => <ImageUploadButton onChangeUrl={onChangeUrl} />,
    [onChangeUrl]
  );

  if (!product) return <Typography>Cargando...</Typography>;

  return (
    <Box>
      <Breadcrumb />
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <form onSubmit={handleSubmit}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Button variant="contained" color="success" type="submit">
                  <Typography color="white" sx={{ fontWeight: "bold" }}>
                    Guardar
                  </Typography>
                </Button>
              </Grid>
              <Grid item>
                <TextField
                  label="Nombre"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Precio"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Stock"
                  name="stock"
                  value={product.stock}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item>{categorySelect}</Grid>
              <Grid item>{imageUploadButton}</Grid>
            </Grid>
          </form>
        </Box>

        <CardProductLayout
          name={product.name}
          price={product.price}
          stock={product.stock}
          category={category}
          imageUrl={imageUrl}
        />
      </Box>
    </Box>
  );
};
