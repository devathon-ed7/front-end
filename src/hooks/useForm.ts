import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, useState } from "react";

export const useForm = () => {
  const [form, setForm] = useState<{ [key: string]: any }>({});

  const initializeForm  = <T extends Record<string, any>> (initialValues: T) => {
    setForm(prevValues => ({ ...prevValues, ...initialValues }));
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSelectChange = ({ target }: SelectChangeEvent) => {
    const { name, value } = target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const resetForm =  <T extends Record<string, any>> (init: T) => {
    setForm(init);
  };

  return {
    ...form,
    form,
    handleInputChange,
    handleSelectChange,
    resetForm,
    initializeForm
  };
};
