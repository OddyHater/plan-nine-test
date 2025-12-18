'use client';

import React, { useState } from 'react';

import { Input } from '@/shared/ui';

interface MaskedInputProps {
  value: string;
  onChange: (value: string) => void;
  format: (value: string) => string;
  placeholder?: string;
  isValid: (value: string) => boolean;
}

export function MaskedInput({ value, onChange, format, placeholder, isValid }: MaskedInputProps) {
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const formatted = format(raw);
    onChange(formatted);
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  const showError = isTouched && !isValid(value);

  return (
    <Input
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      onBlur={handleBlur}
      className={showError ? 'border-alert-red' : ''}
    />
  );
}
