import React from 'react';
import { Input } from '@/components/ui/input';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Label } from './Label';

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  error?: string;
  register: UseFormRegisterReturn;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  placeholder,
  error,
  register,
}) => {
  return (
    <div className="mb-4">
      <Label label={label} />

      <div
        className={`flex items-center rounded-md border focus-within:ring-2 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      >
        <Input
          {...register}
          type={type}
          placeholder={placeholder}
          className="flex-1 border-none outline-none ring-0 focus-visible:ring-0"
        />
      </div>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default FormInput;