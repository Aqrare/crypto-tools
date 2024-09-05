import { useState, ChangeEvent } from "react";

type HexString = `0x${string}`;

export const useHexStringInput = (initialValue: HexString = "0x") => {
  const [value, setValue] = useState<HexString>(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (/^0x[0-9a-fA-F]*$/.test(inputValue)) {
      setValue(inputValue as HexString);
    }
  };

  return [value, handleChange] as const;
};
