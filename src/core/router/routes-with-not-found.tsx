import { NotFound } from "@/shared/components/NotFound";
import { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

interface RoutesWithNotFoundProps {
	children: ReactNode;
}

const RoutesWithNotFound = ({ children }: RoutesWithNotFoundProps) => {
	return (
		<Routes>
			{children}
			<Route path="*" element={<Navigate to="/404" />} />
			<Route path="/404" element={<NotFound />} />
		</Routes>
	);
};

export default RoutesWithNotFound;
