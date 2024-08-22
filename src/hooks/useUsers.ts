import { UsersContext } from "@/dashboard/contexts/Users";
import {
  deleteUserByIdService,
  getListUsersService,
} from "@/services/users.service";
import { snackBarElement } from "@/helpers/snackBarElement";
import { User } from "@/interfaces";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { useUI } from "../dashboard/hooks/UI/useUI";

export const useUsers = () => {
  const { resetDialogResultState } = useUI();
  const { UsersDataGrid, setDatagrid } = useContext(UsersContext);

  const setListUsersDataGrid = async () => {
    try {
      const resp = await getListUsersService();
      const users: User[] = (resp.users as any[]).map(
        ({ id, username, user_details }) => ({
          id: nanoid(),
          idUser: id,
          username,
          name: user_details?.name,
          email: user_details?.email,
          role_id: user_details?.role?.id,
          role: user_details?.role.name,
        })
      );
      setDatagrid(users);
    } catch (error) {
      snackBarElement("error", error as string);
    }
  };

  const deleteUserById = async (id: string) => {
    try {
      await deleteUserByIdService(id);
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

  return {
    //Properties
    UsersDataGrid,
    //Methods
    setListUsersDataGrid,
    deleteUserById,
  };
};
