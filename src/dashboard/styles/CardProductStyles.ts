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
    height: "100%", 
    objectFit: "cover", 
  },
  imageContainer: {
    width: "264px",
    height: "200px", 
    overflow: "hidden", 
    position: "relative", 
    "&:hover .hoverOverlay": {
      opacity: 1,
    },
  },
  hoverOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  button: {
    margin: "8px 0",
  },
  priceContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "8px", 
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