import { User } from "./user.interface";

export interface AuthStore {
    checking: boolean;
    errorMessage: string | undefined;
    status: StatusSession;
    user: User | undefined;
    token: string | undefined;
    setUser: (value: User | undefined) => void;
    setStatus: (value: StatusSession) => void;
    setErrorMessage: (value: string | undefined) => void;
    setChecking: (value: boolean) => void;
    setToken: (value: string | undefined) => void;
}

export type StatusSession = "authenticated" | "not-authenticated" | "checking";