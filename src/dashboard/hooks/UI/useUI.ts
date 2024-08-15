import { useUIStore } from "@/dashboard/store/uiStore";

export const useUI = () => {
  const { dialogResult, resetDialogResultState, setDialogResultState } =
    useUIStore();

  return {
    //Properties
    dialogResult,
    //Methods
    setDialogResultState,
    resetDialogResultState,
  };
};
