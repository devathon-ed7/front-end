import { FC, SVGProps } from "react";
import { Link as RouterLink } from "react-router-dom";

interface Props {
	to: string;
	displayText: string;
	isActive: boolean;
	icon: FC<SVGProps<SVGSVGElement>>;
}

export const NavLink = ({ to, displayText, isActive, icon: Icon }: Props) => {
	return (
		<RouterLink
			to={to}
			className={`flex items-center font-semibold text-white ${
				isActive ? "bg-secondary-dark px-4" : "px-0"
			} py-1.5 text-lg transition-all duration-300 ease-in-out ${
				isActive ? "underline" : "no-underline"
			} w-full`}
		>
			<Icon className="mr-2" />
			{displayText}
		</RouterLink>
	);
};
