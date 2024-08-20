import { getSelectsRolesService } from "../services/users.service";

export const useSelects = () => {
  const getSelectsRoles = async () => {
    const resp = await getSelectsRolesService();
    return resp;
  };

  return { getSelectsRoles };
};
