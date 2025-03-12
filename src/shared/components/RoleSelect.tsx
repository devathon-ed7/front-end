import { nanoid } from "nanoid";
import { ChangeEventHandler } from "react";

interface Props {
	value: string;
	onChange: ChangeEventHandler<HTMLSelectElement>;
	roles: Array<{ id: string; name: string }>;
}

export const RoleSelect = ({ value, onChange, roles }: Props) => {
	return (
		<div className="relative w-full">
			<label
				htmlFor="role-select"
				className="block text-sm font-medium text-gray-700 mb-1"
			>
				Seleccione Rol...
			</label>
			<select
				id="role-select"
				value={value || ""}
				name="role_id"
				onChange={onChange}
				className="block w-full border-gray-300 rounded-md shadow-xs focus:ring-blue-500 focus:border-blue-500"
				required
			>
				<option value="" disabled>
					Seleccione un rol
				</option>
				{(roles || []).map(({ id, name }) => (
					<option key={nanoid()} value={id}>
						{name}
					</option>
				))}
			</select>
		</div>
	);
};
