import { UsersContext } from "@/dashboard/contexts/Users";
import usersService from "@/services/users.service";
import { snackBarElement } from "@/utils/snackBarElement";
import { User, UserDatagrid } from "@/interfaces";
import { useContext, useState } from "react";
import { useUI } from "../dashboard/hooks/UI/useUI";
import { useUsersStore } from "@/store/users.store";

export const useUsers = () => {
  const { resetDialogResultState } = useUI();
  //const { UsersDataGrid, setDatagrid } = useContext(UsersContext);
  const [UsersDataGrid, setDatagrid] = useState<User[]>([]);
  const setUsers = useUsersStore((state) => state.setUsers);

  const setListUsersDataGrid = async () => {
    try {
      const resp = await usersService.getUsers();
      setUsers(resp.users);
      setDatagrid(formatUsers(resp.users));
    } catch (error) {
      snackBarElement("error", error as string);
    }
  };

  const deleteUserById = async (id: string) => {
    try {
      await usersService.deleteUser(id);
      snackBarElement("success", "User deleted");
      /*if (id === user?.idUser) {
        await startLogout();
        navigate("/login");
      }*/
      setListUsersDataGrid();
    } catch (error) {
      snackBarElement("error", error as string);
    } finally {
      resetDialogResultState();
    }
  };

  const formatUsers = (users: User[]): UserDatagrid[] => {
    return users.map((user) => ({
      id: user.id,
      username: user.username,
      name: user.user_details?.name || null,
      email: user.user_details?.email || null,
      role_id: user.user_details?.role_id || null,
      role: user.user_details?.role?.name || null,
    }));
  };

  const userCreate = async (formData: FormData) => {
    try {
      await usersService.userCreate(formData);
    } catch (error) {
      throw error;
    }
  };

  return {
    //Properties
    UsersDataGrid,
    //Methods
    setListUsersDataGrid,
    deleteUserById,
    userCreate,
  };
};
