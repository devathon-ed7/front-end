import { useEffect, useState } from "react";
import { toast } from "sonner";

import { useAuth } from "@/modules/auth/hooks/use-auth";
import { useAuthStore } from "@/modules/auth/store/auth-store";
import { UserLogin } from "@/modules/users/interfaces/user.interface";

export const SignInFormContainer = () => {
  const [form, setForm] = useState<UserLogin>({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const checking = useAuthStore((state) => state.checking);
  const errorMessage = useAuthStore((state) => state.errorMessage);

  const { Login } = useAuth();
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit =  (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setLoading(true);
    Login(form);
  };

  useEffect(() => {
    if (errorMessage) {
      toast("error: " + errorMessage);
    }
  }, [errorMessage]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
