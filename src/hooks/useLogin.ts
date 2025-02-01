import { useEffect, useState } from "react";
import { snackBarElement } from "../utils/snackBarElement";
import { useAuth } from "./useAuth";
import { useForm } from "./useForm";
import { useAuthStore } from "@/store/auth-store";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { form, handleInputChange } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const checking = useAuthStore((state) => state.checking);
  const errorMessage = useAuthStore((state) => state.errorMessage);

  const { Login } = useAuth();
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await Login(form);
      navigate("/home");
    } catch (error) {
      // Manejo de errores
    } finally {
      setLoading(false);
    }
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
    loading,
    checking,
    handleInputChange,
    handleSubmit,
    handleClickShowPassword,
    handleMouseDownPassword,
  };
};