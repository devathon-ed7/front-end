import { useEffect, useState } from "react";
import { useAuth } from "../hooks/use-auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuthStore } from "../store/auth-store";
import { UserRegister } from "@/modules/users/interfaces/user.interface";

interface SignUpForm {
  fullName: string;
  email: string;
  password: string;
}

export const SignUpFormContainer = () => {
  const [form, setForm] = useState<SignUpForm>({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const checking = useAuthStore((state) => state.checking);
  const errorMessage = useAuthStore((state) => state.errorMessage);

  const { Register } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setLoading(true);

    await Register(form as UserRegister);

    setLoading(false);
    navigate("/home");
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
