const styles = {
  card: {
    borderRadius: "8px",
    textAlign: "left",
    position: "relative",
  },
  label: {
    padding: "4px",
    fontWeight: 500,
  },
  stockLabel: {
    backgroundColor: "#388E3C",
    color: "white",
  },
  techLabel: {
    backgroundColor: "black",
    color: "white",
  },
  image: {
    width: "100%", 
    height: "100%", // Asegura que la imagen ocupe toda la altura del contenedor
    objectFit: "cover", // Asegura que la imagen cubra todo el contenedor
  },
  imageContainer: {
    width: "264px",
    height: "200px", // Establece una altura fija para el contenedor de la imagen
    overflow: "hidden", // Asegura que el contenido adicional no se muestre
  },
  priceContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "8px", // Añade un margen superior para separar del contenedor de la imagen
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  labelContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default styles;