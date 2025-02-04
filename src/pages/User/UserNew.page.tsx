import { FormUser, ImagePreview } from "@/components";
import { UserFormContainer } from "@/components/Users/UserFormContainer";
import { useNavigate } from "react-router-dom";

export const UserNewPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/usuarios");
  };

  return (
    <div className="p-4">
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Atras
      </button>
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
          <div className="container-user">
            <div className="container-user-form bg-white p-6 rounded shadow-md">
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
            </div>
          </div>
        )}
      </UserFormContainer>
    </div>
  );
};