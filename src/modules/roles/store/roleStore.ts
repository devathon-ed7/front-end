import { StateCreator, create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { RoleStore, Roles } from "../interfaces/roles.interface";

const RoleApi: StateCreator<RoleStore, [["zustand/devtools", never]]> = (
	set,
) => ({
	roles: [],
	setRoles: (value: Roles[]) => set({ roles: value }, false, "SET_ROLES"),
});

export const useRoleStore = create<RoleStore>()(
	devtools(
		persist(RoleApi, {
			name: "role-store",
			storage: createJSONStorage(() => sessionStorage),
		}),
	),
);
