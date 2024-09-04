import { FormUser } from "@/components";
import { UserFormContainer } from "@/components/Users/UserFormContainer";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";

export const UserEditPage = () => {
  const { id } = useParams();

  return (
    <Box>
      <UserFormContainer userId={Number(id)} isEdit={true}>
        {({
          setFile,
          file,
          form,
          roles,
          handleInputChange,
          handleSelectChange,
          handleSaveUser,
          image,
        }) => (
          <Box className="container-user">
            <Box className="container-user-form paper">
              <FormUser
                setFile={setFile}
                form={form}
                rolesList={roles}
                handleInputChange={handleInputChange}
                handleSelectChange={handleSelectChange}
                handleSave={handleSaveUser}
                isDisabled={false}
              />
              {/* PreviewImageLoaded */}
              <Box className="preview-image">
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
              </Box>
            </Box>
          </Box>
        )}
      </UserFormContainer>
    </Box>
  );
};
