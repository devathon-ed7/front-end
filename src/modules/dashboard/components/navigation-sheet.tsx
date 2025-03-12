import { useRef } from "react";

import { Button } from "@/shared/components/UI/button";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from "@/shared/components/UI/sheet";
import { Menu } from "lucide-react";
import { AppMenu } from "./app-menu";

export const NavigationSheet = () => {
	const imageUrlRef = useRef("/android-chrome-512x512.png");
	const imageNameRef = useRef("logo");
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<img
					src={imageUrlRef.current}
					alt={imageNameRef.current}
					className="w-6 h-6"
				/>
				<AppMenu orientation="vertical" className="mt-12" />
			</SheetContent>
		</Sheet>
	);
};
