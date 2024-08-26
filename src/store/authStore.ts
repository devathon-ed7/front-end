import { create, StateCreator } from "zustand";
import { AuthStore, StatusSession, User } from "@/interfaces";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const AuthApi: StateCreator<AuthStore, [["zustand/devtools", never]]> = (
  set
) => ({
  checking: false,
  errorMessage: "",
  status: "not-authenticated",
  user: null,
  token: "",
  setChecking: (value: boolean) =>
    set({ checking: value }, false, "SET_CHECKING"),
  setErrorMessage: (value: string) =>
    set({ errorMessage: value }, false, "SET_ERROR_MESSAGE"),
  setStatus: (value: StatusSession) =>
    set({ status: value }, false, "SET_STATUS"),
  setUser: (value: User | null) => set({ user: value }, false, "SET_USER"),
  setToken: (value: string) => set({ token: value }, false, "SET_TOKEN"),
});

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(AuthApi, {
      name: "auth-store",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);
