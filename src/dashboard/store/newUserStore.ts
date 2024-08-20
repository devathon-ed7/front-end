import { create } from "zustand";
import { NewUserForm } from "../interfaces/users.interface";

export interface UseNewUserStoreState {
  newUserForm: NewUserForm;
  file?: File | null;
  setNewUserForm: (data: NewUserForm) => void;
  setFile: (file: File | null) => void;
  resetNewUserFormState: () => void;
}

export const initiValues: NewUserForm = {
  username: "",
  name: "",
  email: "",
  password: "",
  role_id: undefined,
};

export const useNewUserStore = create<UseNewUserStoreState>((set) => ({
  newUserForm: initiValues,
  file: null,
  profile_filename: null,
  setNewUserForm: (data) =>
    set((state) => ({
      ...state,
      newUserForm: { ...data },
    })),
  setFile: (data) => set((state) => ({ ...state, file: data })),
  resetNewUserFormState: () =>
    set((state) => ({ ...state, newUserForm: initiValues, file: undefined })),
}));
