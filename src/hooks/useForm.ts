import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, useState } from "react";

export const useForm = <T extends Object>(initState: T) => {
  const [form, setForm] = useState(initState);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForm((form: any) => ({
      ...form,
      [name]: value,
    }));
  };

  const handleSelectChange = ({ target }: SelectChangeEvent) => {
    const { name, value } = target;

    setForm((form: any) => ({
      ...form,
      [name]: value,
    }));
  };

  const resetForm = (init: any) => {
    setForm(init);
  };

  return {
    ...form,
    form,
    handleInputChange,
    handleSelectChange,
    resetForm,
  };
};
