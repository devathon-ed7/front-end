import { SidebarStore } from "@/interfaces";
import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const SidebarApi: StateCreator<SidebarStore, [["zustand/devtools", never]]> = (
  set
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
    })
  )
);
