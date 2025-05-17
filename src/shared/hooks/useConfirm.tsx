import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader } from "../components/UI/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "../components/UI/button";


interface useConfirmProps {
  title: string;
  message: string;
}

export const useConfirm = ({ title, message }: useConfirmProps) :[() => Promise<boolean>, () => React.JSX.Element] => {

  const [promise, setPromise] = useState<{ resolve: (value: boolean) => void } | null>(null);

  const confirm = (): Promise<boolean> => {
    return new Promise((resolve, _reject) => {
      setPromise({ resolve });
    });
  };

  const handleClose = () => {
    setPromise(null);
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const confirmDialog =() => (
    <Dialog open={promise !== null} >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{message}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="pt-2">
          <Button variant="outline" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button onClick={handleConfirm}>
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
  return [confirm, confirmDialog];
}

