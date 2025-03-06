import { ChangeEvent, useState } from "react";

export const useForm = () => {
  const [form, setForm] = useState<{ [key: string]: any }>({});

  const initializeForm = <T extends Record<string, any>>(initialValues: T) => {
    setForm((prevValues) => ({ ...prevValues, ...initialValues }));
    console.log("Formulario inicializado",form);
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSelectChange = ({ target }) => {
    const { name, value } = target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return {
    ...form,
    form,
    handleInputChange,
    handleSelectChange,
    initializeForm,
  };
};
