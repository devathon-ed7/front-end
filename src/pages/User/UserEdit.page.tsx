import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useShallow } from "zustand/react/shallow";
import { User, UserForm } from "@/interfaces";
import { useForm,useUsers,useRoles } from "@/hooks";
import { useRoleStore ,useUsersStore} from "@/store";
import { FormUser } from "@/components";
import { snackBarElement } from "@/utils";

export const UserEditPage = () => {
  const { id } = useParams();
  const roles = useRoleStore(useShallow((state) => state.roles));
  const users = useUsersStore(useShallow((state) => state.users));
  const { getRoles } = useRoles();
  const { userUpdate } = useUsers();

  const {
    initializeForm,
    form,
    handleInputChange,
    handleSelectChange,
    resetForm,
  } = useForm();
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);

  //call getRoles on mount
  useEffect(() => {
    getRoles();
  }, []);

  useEffect(() => {
    if (id) {
      const user = users.find((u) => u.id === Number(id));
      if (user) {
        initializeForm(mapUserToForm(user));
        setImage(user.user_details?.profile_filename || "");
      }
    }
  }, []);

  const mapUserToForm = (user: User): UserForm => ({
    username: user.username || "",
    name: user.user_details?.name || "",
    email: user.user_details?.email || "",
    password: user.password || "",
    role_id: user.user_details?.role_id || 0,
    id: user.user_details?.id || 0,
  });

  const handleSaveUser = async () => {
    try {
      const formData = new FormData();
      if (file) formData.append("file", file);

      formData.append("user[username]", form.username!);
      formData.append("user[password]", form.password!);
      formData.append("user[user_details][name]", form.name!);
      formData.append("user[user_details][email]", form.email!);
      formData.append("user[user_details][role_id]", form.role_id!);
      formData.append("user[user_details][id]", form.id!);

      await userUpdate(Number(id), formData);
      snackBarElement("success", "Usuario actualizado exitosamente");
    } catch (error) {
      snackBarElement("error", error as string);
    } finally {
      setFile(null);
      resetForm({
        username: "",
        name: "",
        email: "",
        password: "",
        role_id: 0,
      });
    }
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
            src={file ? URL.createObjectURL(file) : image} // Usa file si está disponible, de lo contrario, usa profile_filename
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
