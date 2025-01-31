import { Box } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import { FormUser, ImagePreview } from "@/components";
import { UserFormContainer } from "@/components/Users/UserFormContainer";
import { Button } from "@mui/material";

export const UserEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/usuarios");
  };
  return (

    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        columnGap: "2.25em",
        mt: "1em",
      }}
    >
      <Box sx={{ display: "grid", rowGap: "0.625em", justifyItems: "start" }}>
        <Button
          onClick={handleSaveUser}
          //disabled={isDisabled}
          variant="outlined"
          color="success"
          sx={{ px: "2em" }}
        >
          Guardar
        </Button>

        <FormUser
          setFile={setFile}
          form={form}
          rolesList={roles}
          handleInputChange={handleInputChange}
          handleSelectChange={handleSelectChange}
        />
      </Box>
      {/* PreviewImageLoaded */}
      <Box sx={{ width: "12.5em", height: "12.5em" }}>
        {file || image ? (
          <img
            src={file ? URL.createObjectURL(file) : image} 
            alt="imgProfile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              border: "2px solid",
              borderColor: "info.light",
            }}
          />
        ) : (
          <Box
            sx={{
              display: "grid",
              placeContent: "center",
              width: "100%",
              height: "100%",
              backgroundColor: "info.main",
              border: "2px solid",
              borderColor: "info.light",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                textShadow: "0 3px 6px #00000035",
              }}
            >
              Sin imagen
            </Typography>
          </Box>
        )}
      </UserFormContainer>
    </Box>
  );
};
