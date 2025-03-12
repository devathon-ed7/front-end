import { StringAvatarProps, stringAvatar } from "@/core/utils";
import { useAuthStore } from "@/modules/auth/store/auth-store";
import { useMenu } from "@/modules/dashboard/hooks/useMenu";
import { format } from "date-fns";
import { Clock } from "lucide-react";
import { MouseEventHandler } from "react";

interface Props {
	src: string;
	alt: string;
	username: StringAvatarProps;
	size: string;
	onClick: MouseEventHandler<HTMLDivElement>;
}

const Avatar = ({ src, alt, username, size = "40", onClick }: Props) => {
	const { className, children } = username ? stringAvatar(username) : {};

	return (
		<div
			className={`relative inline-block overflow-hidden rounded-full border-2 border-gray-300`}
			style={{ width: `${size}px`, height: `${size}px` }}
			onClick={onClick}
		>
			{src ? (
				<img src={src} alt={alt} className="object-cover w-full h-full" />
			) : (
				<div
					className={`flex items-center justify-center w-full h-full ${className}`}
				>
					{children || alt.charAt(0).toUpperCase()}
				</div>
			)}
		</div>
	);
};

export const Header = () => {
	const user = useAuthStore((state) => state.user);
	const currentTime = format(new Date(), "hh:mm A");
	const { handleClick } = useMenu();

	return (
		<div className="px-3 py-1 border-b-2 border-black">
			<div className="flex justify-between items-center">
				<div className="flex items-center">
					<Clock />
					<span className="ml-1 text-xl font-semibold">{currentTime}</span>
				</div>
				<div className="relative cursor-pointer">
					<span className="absolute right-0 bottom-0 w-3 h-3 bg-green-500 rounded-full"></span>
					<Avatar
						src={user?.profile_filename}
						alt={user?.username}
						username={user?.username}
						size="40"
						onClick={handleClick}
					/>
				</div>
				{/* <BasicMenu anchorEl={anchorEl} open={open} handleClose={handleClose} /> */}
			</div>
		</div>
	);
};
