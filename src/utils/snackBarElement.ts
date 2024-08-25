import { VariantType, enqueueSnackbar } from "notistack";

export const snackBarElement = (variant: VariantType, msg: string) => {
  enqueueSnackbar(msg, {
    variant,
    style: { fontWeight: "bold", userSelect: "none" },
    anchorOrigin: { vertical: "top", horizontal: "right" },
  });
};
