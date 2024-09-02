import { useUsers } from "@/hooks/useUsers";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FormUser } from "@/components/Users/FormUser";
import { useRoles } from "@/hooks/useRoles";
import { useRoleStore } from "@/store/roleStore";
import { snackBarElement } from "@/utils/snackBarElement";
import { useForm } from "@/hooks/useForm";
import "./Users.css";

export const UserNew = () => {
  //stores
  const roles = useRoleStore((state) => state.roles);
  //hooks
  const { userCreate } = useUsers();
  const { getRoles } = useRoles();

  const [isDisabled, setIsDisabled] = useState(false);
  const areValuesValid = (obj: Record<string, any>): boolean => {
    return Object.values(obj).every(
      (value) => value !== undefined && value !== null && value !== ""
    );
  };

  const {
    initializeForm,
    form,
    handleInputChange,
    handleSelectChange,
    resetForm,
  } = useForm();

  const [file, setFile] = useState<File | null>(null);

  //call getRoles on mount
  useEffect(() => {
    getRoles();
    initializeForm({
      username: "",
      name: "",
      email: "",
      password: "",
      role_id: 0,
    });
  }, []);

  useEffect(() => {
    setIsDisabled(!areValuesValid({ form }));
  }, [form]);

  const handleSaveUser = async () => {
    try {
      const formData = new FormData();
      if (file) formData.append("file", file);

      formData.append("user[username]", form.username!);
      formData.append("user[password]", form.password!);
      formData.append("user[user_details][name]", form.name!);
      formData.append("user[user_details][email]", form.email!);
      formData.append("user[user_details][role_id]", form.role_id!);

      await userCreate(formData);
      snackBarElement("success", "Usuario creado exitosamente");
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
        <Box className="preview-image">
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
    </Box>
  );
};
