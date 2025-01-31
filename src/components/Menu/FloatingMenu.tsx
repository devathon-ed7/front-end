import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import "./FloatingMenu.css";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export const FloatingMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Fab
        size="small"
        color="secondary"
        aria-label="add"
        className="floating-menu"
        onClick={handleClick}
      >
        <AddIcon />
      </Fab>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose} component={Link} to="/home">
          Inicio
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/usuarios">
          Usuarios
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/productos">
          Productos
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/categorias">
          Categorías
        </MenuItem>
      </Menu>
    </Box>
  );
};
