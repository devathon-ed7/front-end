import { Box, Button } from "@mui/material";
import { FormUser, ImagePreview } from "@/components";
import { UserFormContainer } from "@/components/Users/UserFormContainer";
import { useNavigate } from "react-router-dom";
export const UserNewPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/usuarios");
  };
  return (
    <Box>
      <Button onClick={handleClick} variant="contained">
        Atras
      </Button>
      <UserFormContainer userId={null} isEdit={false}>
        {({
          setFile,
          file,
          form,
          roles,
          handleInputChange,
          handleSelectChange,
          handleSaveUser,
          isDisabled,
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
                isDisabled={isDisabled}
              />
              {/* PreviewImageLoaded */}
              <ImagePreview file={file} />
            </Box>
          </Box>
        )}
      </UserFormContainer>
    </Box>
  );
};
