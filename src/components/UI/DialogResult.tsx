import { useUI } from "@/dashboard/hooks/UI/useUI";
import { snackBarElement } from "@/helpers/snackBarElement";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

interface Props {
  handleDialogResultConfirm: (id: string) => void;
}

export const DialogResult = ({ handleDialogResultConfirm }: Props) => {
  const handleCloseDialogResult = () => {
    resetDialogResultState();
  };
  const {
    dialogResult: { isOpen, message, title, idRegister },
    resetDialogResultState,
  } = useUI();

  const handleConfirm = () => {
    if (idRegister) {
      handleDialogResultConfirm(idRegister);
      //   resetDialogResultState();
    } else {
      snackBarElement(
        "error",
        "Id de registro no ha sido procesado correctamente"
      );
    }
  };
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleCloseDialogResult}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            fontWeight: "bold",
            color: "tertiary.dark",
            display: "flex",
            alignItems: "center",
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent sx={{ fontWeight: "600" }}>{message}</DialogContent>
        <DialogActions sx={{ display: "flex", gap: "1em" }}>
          <Button
            onClick={handleCloseDialogResult}
            variant="text"
            color="info"
            sx={{ color: "info.dark" }}
          >
            Cancelar
          </Button>
          <Box onClick={() => handleConfirm()}>
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{ color: "white", px: "2em", fontSize: "1.1em" }}
            >
              Confirmar
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
};
