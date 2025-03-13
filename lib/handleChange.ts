import { useState, ChangeEvent } from "react";

interface FormValues {
  [key: string]: string;
}

interface UseFormResult {
  formData: FormValues;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  setFormData: React.Dispatch<React.SetStateAction<FormValues>>;
}

function useForm(initialValues: FormValues): UseFormResult {
  const [formData, setFormData] = useState<FormValues>(initialValues);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return {
    formData,
    handleChange,
    setFormData,
  };
}

export default useForm;
