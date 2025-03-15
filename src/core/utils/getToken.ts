export const getTokenFromSessionStorage = (): string | null => {
	const authStore = sessionStorage.getItem("auth-store");
	if (!authStore) return null;

	try {
		const parsedStore = JSON.parse(authStore);
		return parsedStore?.state.token || null;
	} catch (error) {
		console.error("Error al parsear el auth-store:", error);
		return null;
	}
};
