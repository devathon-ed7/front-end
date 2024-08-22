import { useNewUser } from "@/hooks/useNewUser";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FormNewUser } from "./FormNewUser";

export const NewUser = () => {
  const {
    form,
    roles,
    file,
    handleSaveNewUser,
    handleInputChange,
    handleSelectChange,
    setFile,
    resetNewUserFormState,
  } = useNewUser();
  const [isDisabled, setIsDisabled] = useState(false);
  const areValuesValid = (obj: Record<string, any>): boolean => {
    return Object.values(obj).every(
      (value) => value !== undefined && value !== null && value !== ""
    );
  };

  useEffect(() => {
    setIsDisabled(!areValuesValid({ form }));
  }, [form]);

  useEffect(() => {
    resetNewUserFormState();
  }, []);

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
          onClick={handleSaveNewUser}
          disabled={isDisabled}
          variant="outlined"
          color="success"
          sx={{ px: "2em" }}
        >
          Guardar
        </Button>
        <FormNewUser
          setFile={setFile}
          form={form}
          rolesList={roles}
          handleInputChange={handleInputChange}
          handleSelectChange={handleSelectChange}
        />
      </Box>
      {/* PreviewImageLoaded */}
      <Box sx={{ width: "12.5em", height: "12.5em" }}>
        {file ? (
          <img
            src={URL.createObjectURL(file)}
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
      </Box>
    </Box>
  );
};
