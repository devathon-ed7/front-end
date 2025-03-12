import { useUI } from "@/modules/dashboard/hooks/UI/useUI";
import { User, UserDatagrid } from "@/modules/users/interfaces/user.interface";
import usersService from "@/modules/users/services/users.service";
import { useUsersStore } from "@/modules/users/store/users.store";
import { useState } from "react";
import { toast } from "sonner";

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
			toast(("error" + error) as string);
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
			username: user.fullName,
			name: user.user_details?.profile_filename || null,
			email: user.email || null,
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

	const userUpdate = async (id: number, formData: FormData) => {
		try {
			await usersService.userUpdate(id, formData);
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
		userUpdate,
	};
};
