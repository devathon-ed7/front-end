import { useUsers } from "@/hooks/useUsers";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FormNewUser } from "@/components/Users/FormNewUser";
import { useRoles } from "@/hooks/useRoles";
import { useRoleStore } from "@/store/roleStore";
import { snackBarElement } from "@/utils/snackBarElement";
import { useForm } from "@/hooks/useForm";
import { NewUserForm } from "@/interfaces";

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


const initialValues: NewUserForm = ({
username: "",
  name: "",
  email: "",
  password: "",
  role_id: 0,
  });
const { form, handleInputChange, handleSelectChange, resetForm } =
useForm(initialValues);

const [file, setFile] = useState<File | null>(null);



  //call getRoles on mount
  useEffect(() => {
    getRoles();
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
      resetForm(initialValues);
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
