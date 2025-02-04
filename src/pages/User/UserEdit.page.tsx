/*import { Box } from "@mui/system";
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

    <Box>
      <Button onClick={handleClick} variant="contained">
        Atras
      </Button>
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
              {/* PreviewImageLoaded *//*}
              <ImagePreview file={file} image={image} />
            </Box>
          </Box>
        )}
      </UserFormContainer>
    </Box>
  );
};
*/