import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import lockIcon from '@/assets/Lock.png';
import { PasswordToggle } from './PasswordToggle';
import { Label } from './Label';
import { Link } from 'react-router-dom';
import { UseFormRegisterReturn } from 'react-hook-form';

interface PasswordFieldProps {
  register: UseFormRegisterReturn;
  error?: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ register, error }) => {
  const [passwordHide, setPasswordHide] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordHide((prev) => !prev);
  };

  return (
    <div className="mb-4 flex flex-col">
      <div className="mb-1 flex justify-between">
        <Label label="Password" />
        <Label label="Forget password?" />
      </div>
      <div
        className={`flex items-center rounded-md border px-3 ${error ? 'border-red-500' : 'border-gray-300'}`}
      >
        <img src={lockIcon} alt="Lock" className="mr-3 h-5 w-5" />

        <Input
          {...register}
          type={!passwordHide ? 'password' : 'text'}
          placeholder="Password"
          className="flex-1 border-none outline-none focus:ring-0 focus-visible:ring-0"
        />
        <PasswordToggle
          isVisible={passwordHide}
          toggleVisibility={togglePasswordVisibility}
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <Label label="New To Stay Connected?" />
        <Link to={'/register'} className="font-anek-devanagari text-[15px]">
          Sign Up
        </Link>
      </div>

      {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default PasswordField;