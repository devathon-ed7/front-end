import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useAuthStore } from "@/store/auth-store";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface SignUpForm {
  fullName: string;
  email: string;
  password: string;
}

export const SignInFormContainer = () => {
  const [form, setForm] = useState<SignUpForm>({ fullName: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const checking = useAuthStore((state) => state.checking);
  const errorMessage = useAuthStore((state) => state.errorMessage);

  const { Login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await Login(form);
      navigate("/home");
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
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
