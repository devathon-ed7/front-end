import { create } from "zustand";
import { AuthState, User } from "../../interfaces/index.interface";

export interface UseAuthStoreState extends AuthState {
  setLogin: (data: User) => void;
  setLogout: (msg?: string) => void;
  setOnChecking: () => void;
}

export const initiValues: AuthState = {
  checking: false,
  errorMessage: undefined,
  status: "not-authenticated",
  user: undefined,
};

export const useAuthStore = create<UseAuthStoreState>((set) => ({
  ...initiValues,
  setLogin: (data) =>
    set((_state) => ({
      checking: false,
      errorMessage: undefined,
      status: "authenticated",
      user: data,
    })),
  setLogout: (msg) =>
    set((_state) => ({
      checking: false,
      errorMessage: msg,
      status: "not-authenticated",
      user: undefined,
    })),
  setOnChecking: () =>
    set(() => ({
      checking: true,
      errorMessage: undefined,
      user: undefined,
    })),
}));
