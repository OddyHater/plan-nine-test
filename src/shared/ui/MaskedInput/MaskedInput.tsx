'use client';

import { Input } from "@/shared/ui";

interface MaskedInputProps {
  value: string;
  onChange: (value: string) => void;
  format: (value: string) => string;
  placeholder?: string;
}

export function MaskedInput({
  value,
  onChange,
  format,
  placeholder,
}: MaskedInputProps) {
  const handleChange = (raw: string) => {
    const formatted = format(raw);
    onChange(formatted);
  };

  return (
    <Input
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}