import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	className?: string;
}

export const Label = ({ children, className }: Props) => (
	<span className={`text-sm text-gray-500 ${className}`}>{children}</span>
);
