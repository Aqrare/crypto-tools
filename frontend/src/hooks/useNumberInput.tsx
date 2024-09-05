import { useState, ChangeEvent } from "react";

export const useNumberInput = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  return [value, handleChange] as const;
};
