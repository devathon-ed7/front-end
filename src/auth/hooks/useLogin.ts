import { useEffect, useState } from "react";
import { snackBarElement } from "../../helpers/snackBarElement";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { UserLogin } from "../../interfaces/index.interface";

const formData: UserLogin = {
  userName: "",
  password: "",
};
export const useLogin = () => {
  const { form, handleInputChange } = useForm(formData);
  const [showPassword, setShowPassword] = useState(false);

  const { startLogin, errorMessage, checking } = useAuth();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    startLogin(form);
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
