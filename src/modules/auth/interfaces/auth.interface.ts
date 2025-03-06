import { User } from "@/modules/users/interfaces/user.interface";

export interface AuthStore {
  checking: boolean;
  errorMessage: string;
  status: StatusSession;
  user: User | null;
  token: string;
  setUser: (value: User | null) => void;
  setStatus: (value: StatusSession) => void;
  setErrorMessage: (value: string) => void;
  setChecking: (value: boolean) => void;
  setToken: (value: string) => void;
}

export type StatusSession = "authenticated" | "not-authenticated" | "checking";
