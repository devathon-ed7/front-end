import { Link, SvgIconTypeMap } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface Props {
  to: string;
  displayText: string;
  isActive: boolean;
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
}

export const NavLink = ({ to, displayText, isActive, icon: Icon }: Props) => {
  return (
    <Link
      to={to}
      component={RouterLink}
      sx={{
        display: "flex",
        alignItems: "center",
        fontWeight: "semibold",
        color: "white",
        backgroundColor: isActive ? "secondary.dark" : "transparent",
        paddingX: isActive ? "1em" : "0",
        paddingY: "5px",
        fontSize: "1.375em",
        textAlign: "left",
        width: "100%",
        transition: "padding 0.3s ease", 
        textDecoration: isActive? 'underline':'none'
      }}
    >
      <Icon sx={{ marginRight: "0.5em" }} />
      {displayText}
    </Link>
  );
};