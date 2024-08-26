import { User, UsersStore } from "@/interfaces";
import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const UsersApi: StateCreator<UsersStore, [["zustand/devtools", never]]> = (
  set
) => ({
  users: [],
  setUsers: (value: User[]) =>
    set(
      {
        users: value,
      },
      false,
      "SET_USERS"
    ),
});

export const useUsersStore = create<UsersStore>()(
  devtools(
    persist(UsersApi, {
      name: "users-store",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);
