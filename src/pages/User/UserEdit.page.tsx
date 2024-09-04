import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { FormUser, ImagePreview } from "@/components";
import { UserFormContainer } from "@/components/Users/UserFormContainer";

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
              <ImagePreview file={file} image={image} />
            </Box>
          </Box>
        )}
      </UserFormContainer>
    </Box>
  );
};
