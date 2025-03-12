export function stringToColor(string: string) {
	let hash = 0;
	let i;

	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}

	let color = "#";

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
	}

	return color;
}
export interface StringAvatarProps {
	name: string;
}

export const stringAvatar = ({ name }: StringAvatarProps) => {
	const nameParts = name.split(" ");
	let initials;

	if (nameParts.length === 1) {
		initials = nameParts[0][0];
	} else {
		initials = `${nameParts[0][0]}${nameParts[1][0]}`;
	}

	const bgColor = stringToColor(name); // Asegúrate de que esta función devuelva un color en formato válido para Tailwind

	return {
		className:
			`flex items-center justify-center w-10 h-10 rounded-full border-3 border-black mt-1` +
			` bg-[${bgColor}] text-white`, // Utiliza Tailwind para el color de fondo
		children: initials,
	};
};
