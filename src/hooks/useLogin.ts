import { useEffect, useState } from "react";
import { snackBarElement } from "../utils/snackBarElement";
import { useAuth } from "./useAuth";
import { useForm } from "./useForm";
import { UserLogin } from "../interfaces";
import { useAuthStore } from "@/store/authStore";

const formData: UserLogin = {
  username: "",
  password: "",
};
export const useLogin = () => {
  const { form, handleInputChange } = useForm(formData);
  const [showPassword, setShowPassword] = useState(false);

  const checking = useAuthStore((state) => state.checking);
  const errorMessage = useAuthStore((state) => state.errorMessage);

  const { Login } = useAuth();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    Login(form);
  };

  useEffect(() => {
    if (errorMessage) {
      snackBarElement("error", errorMessage);
    }
  }, [errorMessage]);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return {
    form,
    showPassword,
    checking,
    handleInputChange,
    handleSubmit,
    handleClickShowPassword,
    handleMouseDownPassword,
  };
};
