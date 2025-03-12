import { create } from "zustand";

export interface UseUIStoreState {
	dialogResult: dialogResultState;
	setDialogResultState: (dataDialogResult: dialogResultState) => void;
	resetDialogResultState: () => void;
}

export interface dialogResultState {
	isOpen: boolean;
	title?: string;
	message?: string;
	idRegister?: number;
}

export const initiValues: dialogResultState = {
	isOpen: false,
	title: undefined,
	message: undefined,
	idRegister: undefined,
};

export const useUIStore = create<UseUIStoreState>((set) => ({
	dialogResult: initiValues,
	setDialogResultState: (dataDialogResult) =>
		set((state) => ({
			...state,
			dialogResult: { ...dataDialogResult },
		})),
	resetDialogResultState: () =>
		set((state) => ({ ...state, dialogResult: initiValues })),
}));
