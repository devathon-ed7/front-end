import { useEffect, useState } from "react";
import { useUsers } from "@/hooks/useUsers";
import { useRoles } from "@/hooks/useRoles";
import { useForm } from "@/hooks/useForm";
import { useRoleStore } from "@/store/roleStore";
import { snackBarElement } from "@/utils/snackBarElement";
import { UserNew } from "@/components/Users/UserNew";
import { User, UserForm } from "@/interfaces";
import { useShallow } from "zustand/react/shallow";
import { useUsersStore } from "@/store";

interface UserFormContainerProps {
  userId: number | null;
  isEdit: boolean;
  children: (props: any) => JSX.Element;
}

export const UserFormContainer: React.FC<UserFormContainerProps> = ({
  userId,
  isEdit,
  children,
}) => {
  //stores
  const roles = useRoleStore(useShallow((state) => state.roles));
  const users = useUsersStore(useShallow((state) => state.users));
  //hooks
  const { userCreate, userUpdate } = useUsers();
  const { getRoles } = useRoles();
  const { initializeForm, form, handleInputChange, handleSelectChange } =
    useForm();
  const [isDisabled, setIsDisabled] = useState(false);
  //if user new up file to backend
  const [file, setFile] = useState<File | null>(null);
  //if user exists save url in image.
  const [image, setImage] = useState<string | null>(null);
  const areValuesValid = (obj: Record<string, any>): boolean => {
    return Object.values(obj).every(
      (value) => value !== undefined && value !== null && value !== ""
    );
  };

  //call getRoles on mount
  useEffect(() => {
    if (roles.length === 0) getRoles();

    initializeForm({
      username: "",
      name: "",
      email: "",
      password: "",
      role_id: 0,
    });
  }, [roles.length]);

  useEffect(() => {
    setIsDisabled(!areValuesValid({ form }));
  }, [form]);

  useEffect(() => {
    if (isEdit && userId) {
      const user = users.find((u) => u.id === Number(userId));
      if (user) {
        initializeForm(mapUserToForm(user));
        setImage(user.user_details?.profile_filename || "");
      }
    }
  }, [isEdit, userId, users]);

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

      if (isEdit) {
        formData.append("user[user_details][id]", form.id!);
        await userUpdate(Number(userId), formData);
      } else {
        await userCreate(formData);
      }

      snackBarElement("success", "Usuario creado exitosamente");
    } catch (error) {
      snackBarElement("error", error as string);
    } finally {
      setFile(null);
      initializeForm({
        username: "",
        name: "",
        email: "",
        password: "",
        role_id: 0,
      });
    }
  };

  return (
    <>
      {children({
        setFile,
        file,
        form,
        roles,
        handleInputChange,
        handleSelectChange,
        handleSaveUser,
        isDisabled,
        image,
      })}
    </>
  );
};
