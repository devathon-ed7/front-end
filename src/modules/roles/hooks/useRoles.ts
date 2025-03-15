// import rolesService from "../services/roles.service";
// import { useRoleStore } from "../store/roleStore";

export const useRoles = () => {
	// const setRoles = useRoleStore((state) => state.setRoles);

	const getRoles = async () => {
		// const resp = await rolesService.getRoles();
		// const { roles } = resp;
		// setRoles(roles);
	};

	return { getRoles };
};
