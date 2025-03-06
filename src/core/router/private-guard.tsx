
import { useAuthStore } from "@/modules/auth/store/auth-store";
import { Navigate, Outlet } from "react-router-dom";

const PrivateGuard = () => {
	const status = useAuthStore((state) => state.status);
	return status === "authenticated" ? <Outlet /> : <Navigate to="/auth/login" replace />
}

export default PrivateGuard;