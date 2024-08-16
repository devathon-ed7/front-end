import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { productStore } from "../../store/dashboard/productStore";
import { Breadcrumb } from "../components/Breadcrumb";
import { Grid } from "@mui/material";
import { CardProductLayout } from "../layout/CardProductLayout";
import { CategorySelect } from "../components/Products/CategorySelect";
import { ImageUploadButton } from '../components/Products/ImageUploadButton';

export const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, updateProduct } = productStore((state) => ({
    products: state.products,
    updateProduct: state.updateProduct,
  }));
  const [product, setProduct] = useState(null);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct({ ...product, category, imageUrl });
    navigate("/productos");
  };

  const onChangeUrl = (url) => {
    setImageUrl(url);
  };

  const categorySelect = useMemo(
    () => <CategorySelect category={category} setCategory={setCategory} />,
    [category, setCategory]
  );

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
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                >
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