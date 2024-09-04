import { Box } from "@mui/material";
import { FormUser, ImagePreview } from "@/components";
import { UserFormContainer } from "@/components/Users/UserFormContainer";
export const UserNewPage = () => {
  return (
    <Box>
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
