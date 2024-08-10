import PersonIcon from "@mui/icons-material/Person";
import { Divider, ListItemIcon, ListItemText } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";

interface Props {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
}

export default function BasicMenu({ anchorEl, open, handleClose }: Props) {
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
        <ListItemText>Usuario</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" sx={{ color: "red" }} />
        </ListItemIcon>
        <ListItemText>Web Clipboard</ListItemText>
      </MenuItem>
    </Menu>
  );
}
