import { Label } from '@radix-ui/react-label';
import { FC, useState } from 'react';
import { Input } from '@/components/ui/input';
import viewIcon from '@/assets/view.png';
import lockIcon from '@/assets/Lock.png';
import fieye from '@/assets/hide.png';
import { inputDefaultStyle, inputWrapperStyles } from '../../useRegisterLogic';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface FormDataRegistration {
  email: string,
  password: string,
  repeatPassword: string;
}

interface FormInputProps {
  register: UseFormRegister<FormDataRegistration>;
  errors: FieldErrors<FormDataRegistration>;
  label: string;
  name: keyof FormDataRegistration; 
  type: string;
  password?: string, 
  repeatPassword?: string;
}

export const FormInput: FC<FormInputProps> = ({ register, errors, label, name, type }) => {
  return (
    <div>
      <Label>{label}</Label>
      <div
        className={`${inputWrapperStyles} ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
      >
        <Input
          {...register(name)}
          type={type}
          placeholder={label}
          className={`${inputDefaultStyle}`}
        />
      </div>
      {errors.email && (
        <span className="text-sm text-red-500">{errors.email.message}</span>
      )}
    </div>
  );
};

export const FormInputPassword: FC<FormInputProps> = ({
  register,
  errors,
  label,
  name,
  type,
  password, 
  repeatPassword
}) => {
const [passwordHide, setPasswordHide] = useState(false);
  return (
    <div>
      <Label>{label}</Label>
      <div
        className={`${inputWrapperStyles} ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
      >
        <img src={lockIcon} alt="Lock" className="mr-3 h-5 w-5" />
        <Input
          {...register(name)}
          type={passwordHide ? "text" : type}
          placeholder={label}
          className={`${inputDefaultStyle}`}
        />
        <div onClick={() => setPasswordHide(!passwordHide)}>
        {passwordHide ? (
          <img
            src={viewIcon}
            alt="view"
            className="ml-3 h-4 w-4 cursor-pointer"
          />
        ) : (
          <img src={fieye} alt="view" className="ml-3 h-4 w-4 cursor-pointer" />
        )}
      </div>
      </div>
      {errors.email && (
        <span className="text-sm text-red-500">{errors.email.message}</span>
      )}
      {
        label === "Repeat password"
        ? password !== repeatPassword && <span className="text-sm text-red-500">Passwords do not match!</span>
        : null
      }
      
    </div>
  );
};
