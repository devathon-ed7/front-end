import { toast as sonnerToast } from "sonner";

type ToastProps = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive" | "success";
};

export function useToast() {
  const toast = ({ title, description, variant = "default" }: ToastProps) => {
    switch (variant) {
      case "destructive":
        return sonnerToast.error(title, {
          description,
        });
      case "success":
        return sonnerToast.success(title, {
          description,
        });
      default:
        return sonnerToast(title, {
          description,
        });
    }
  };

  return { toast };
}