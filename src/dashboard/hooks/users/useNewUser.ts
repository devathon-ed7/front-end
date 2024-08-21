import { newUserService } from "@/dashboard/services/users.service";
import { initiValues, useNewUserStore } from "@/dashboard/store/newUserStore";
import { snackBarElement } from "@/helpers/snackBarElement";
import { useForm } from "@/hooks/useForm";
import { Roles } from "@/interfaces/index.interface";
import { useEffect, useState } from "react";
import { useSelects } from "../useSelects";

export const useNewUser = () => {
  const { newUserForm, setNewUserForm, file, setFile, resetNewUserFormState } =
    useNewUserStore();
  const { getSelectsRoles } = useSelects();

  const [rolesList, setRolesList] = useState<Roles[]>([]);
  useEffect(() => {
    getSelectsRoles().then((resp) => {
      setRolesList((resp as any).roles || []);
    });
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
    rolesList,
    file,
    setFile,
    handleInputChange,
    handleSelectChange,
    handleSaveNewUser,
    resetNewUserFormState,
  };
};
