import { User } from "@/modules/users/interfaces/user.interface";
import { useAuthStore } from "../store/auth-store";

export const useOauth = () => {
	const setStatusAuth = useAuthStore((state) => state.setStatus);
	const setUser = useAuthStore((state) => state.setUser);
	const setToken = useAuthStore((state) => state.setToken);

	const setOauthUser = async (token: string, user: User) => {
		setStatusAuth("authenticated");
		setToken(token);
		setUser( user );
	};

	return {
		setOauthUser,
	};
};
