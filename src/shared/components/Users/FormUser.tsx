import { Roles } from "@/modules/roles/interfaces/roles.interface";
import { UserForm } from "@/modules/users/interfaces/user.interface";
import { ChangeEvent } from "react";
import { RoleSelect } from "../RoleSelect";
import { ImageUpload } from "../UI/ImageUpload___";

interface Props {
	form: UserForm;
	rolesList: Roles[];
	handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	setFile: (data: File) => void;
	handleSave: () => void;
	isDisabled: boolean;
}

export const FormUser = ({
	form,
	rolesList = [],
	handleInputChange,
	handleSelectChange,
	setFile,
	handleSave,
	isDisabled,
}: Props) => {
	return (
		<form className="space-y-4">
			<input
				type="text"
				name="username"
				value={form.username || ""}
				onChange={handleInputChange}
				placeholder="Usuario..."
				required
				className="block w-full p-2 border border-gray-300 rounded-md focus:outline-hidden focus:border-blue-500"
			/>
			<input
				type="password"
				name="password"
				value={form.password || ""}
				onChange={handleInputChange}
				placeholder="Contraseña..."
				required
				className="block w-full p-2 border border-gray-300 rounded-md focus:outline-hidden focus:border-blue-500"
			/>
			<input
				type="text"
				name="name"
				value={form.name || ""}
				onChange={handleInputChange}
				placeholder="Nombre..."
				required
				className="block w-full p-2 border border-gray-300 rounded-md focus:outline-hidden focus:border-blue-500"
			/>
			<input
				type="email"
				name="email"
				value={form.email || ""}
				onChange={handleInputChange}
				placeholder="E-mail..."
				required
				className="block w-full p-2 border border-gray-300 rounded-md focus:outline-hidden focus:border-blue-500"
			/>
			<RoleSelect
				value={form.role_id || 0}
				onChange={handleSelectChange}
				roles={rolesList}
			/>
			<ImageUpload onChange={setFile} />
			<button
				onClick={handleSave}
				disabled={isDisabled}
				className={`px-8 py-2 text-white rounded-md ${
					isDisabled ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
				} transition duration-300`}
			>
				Save
			</button>
		</form>
	);
};
