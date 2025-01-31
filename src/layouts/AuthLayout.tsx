import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import BackGroundImage from "@/assets/BackGroundImage.webp";
interface Props {
  children: React.ReactNode;
  sxProps?: SxProps;
}

const AuthLayout = ({ children, sxProps }: Props) => {
  return (
    <>
      <img
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          width: "100vw",
          height: "100vh",
          zIndex: "-100000",
        }}
        src={BackGroundImage}
        loading="lazy"
      />
      <Box sx={{ ...sxProps }}>{children}</Box>
    </>
  );
};

export default AuthLayout;
