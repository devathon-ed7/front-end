import { apiGet } from "@/core/config/axiosConfig";
import { Roles } from "../interfaces/roles.interface";

const getRoles = async () => {
	try {
		await apiGet<Roles[]>("/roles");
	} catch (error) {
		if (error instanceof Error) {
			throw error.message;
		}
		throw String(error);
	}
};

export default {
	getRoles,
};
