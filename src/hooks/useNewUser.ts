import { newUserService } from "@/services/users.service";
import { initiValues, useNewUserStore } from "@/dashboard/store/newUserStore";
import { snackBarElement } from "@/helpers/snackBarElement";
import { useForm } from "@/hooks/useForm";
import { useEffect } from "react";
import { useRoles } from "./useRoles";
import { useRoleStore } from "@/store/roleStore";

export const useNewUser = () => {
  const { newUserForm, setNewUserForm, file, setFile, resetNewUserFormState } =
    useNewUserStore();
  const { getRoles } = useRoles();
  const roles = useRoleStore((state) => state.roles);

  useEffect(() => {
    getRoles();
  }, []);

  const { form, handleInputChange, handleSelectChange, resetForm } =
    useForm(initiValues);

  useEffect(() => {
    setNewUserForm(form);
  }, [form]);

  const handleSaveNewUser = async () => {
    try {
      const formData = new FormData();
      if (file) formData.append("file", file);

      formData.append("user[username]", newUserForm.username!);
      formData.append("user[password]", newUserForm.password!);
      formData.append("user[user_details][name]", newUserForm.name!);
      formData.append("user[user_details][email]", newUserForm.email!);
      formData.append("user[user_details][role_id]", newUserForm.role_id!);

      const resp = await newUserService(formData);

      snackBarElement("success", resp.message);
    } catch (error) {
      snackBarElement("error", error as string);
    } finally {
      resetForm(initiValues);
      setFile(null);
    }
  };

  return {
    form,
    roles,
    file,
    setFile,
    handleInputChange,
    handleSelectChange,
    handleSaveNewUser,
    resetNewUserFormState,
  };
};
