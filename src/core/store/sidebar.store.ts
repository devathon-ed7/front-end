import { StateCreator, create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { SidebarStore } from "../interfaces/sidebar.interface";

const SidebarApi: StateCreator<SidebarStore, [["zustand/devtools", never]]> = (
	set,
) => ({
	isVisible: true,
	toggleNavSection: () => {
		set((state) => ({
			isVisible: !state.isVisible,
		}));
	},
});

export const useSidebarStore = create<SidebarStore>()(
	devtools(
		persist(SidebarApi, {
			name: "sidebar-store",
			storage: createJSONStorage(() => sessionStorage),
		}),
	),
);
