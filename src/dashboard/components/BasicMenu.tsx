import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { Divider, ListItemIcon, ListItemText } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface Props {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
}

export default function BasicMenu({ anchorEl, open, handleClose }: Props) {
  const { user, startLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await startLogout();
    navigate("/login");
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <PersonIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>{user?.username || "Usuario"} </ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem
        onClick={() => {
          handleClose();
          handleLogout();
        }}
      >
        <ListItemIcon>
          <LogoutIcon fontSize="small" sx={{ color: "red" }} />
        </ListItemIcon>
        <ListItemText>Cerrar Sesion</ListItemText>
      </MenuItem>
    </Menu>
  );
}
