import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/shared/components/UI/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";

export const AppMenu = (props: NavigationMenuProps) => (
	<NavigationMenu {...props}>
		<NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
			<NavigationMenuItem>
				<NavigationMenuLink asChild>
					<Link to="/home">Home</Link>
				</NavigationMenuLink>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink asChild>
					<Link to="#">Products</Link>
				</NavigationMenuLink>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenu>
);
