import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import lockIcon from '@/assets/Lock.png';
import fieye from '@/assets/hide.png';
import viewIcon from '@/assets/view.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormData } from '@/interfaces/login';

// type FormData = {
//   email: string;
//   password: string;
// };

const Login: React.FC = () => {
  const [passwordHide, setPasswordHide] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="flex h-[400px] w-[400px] flex-col gap-3">
          <CardHeader>
            <CardTitle className="mt-2 self-center text-xl">Log in</CardTitle>
          </CardHeader>

          <CardContent>
            <div
              className={`flex items-center rounded-md border px-3 focus-within:ring-2 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <Input
                {...register('email')}
                type="email"
                placeholder="Email"
                className="flex-1 border-none outline-none ring-0 focus-visible:border-none focus-visible:outline-none focus-visible:ring-0"
              />
            </div>
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </CardContent>

          <CardContent>
            <p className="text-muted-foreground">Password</p>
            <div
              className={`flex items-center rounded-md border px-3 focus-within:ring-2 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <img src={lockIcon} alt="Lock" className="mr-3 h-5 w-5" />
              <Input
                {...register('password')}
                type={!passwordHide ? 'password' : ''}
                placeholder="Password"
                className="flex-1 border-none outline-none ring-0 focus-visible:border-none focus-visible:outline-none focus-visible:ring-0"
              />
              <div onClick={() => setPasswordHide(!passwordHide)}>
                {passwordHide ? (
                  <img
                    src={viewIcon}
                    alt="view"
                    className="ml-3 h-4 w-4 cursor-pointer"
                  />
                ) : (
                  <img
                    src={fieye}
                    alt="view"
                    className="ml-3 h-4 w-4 cursor-pointer"
                  />
                )}
              </div>
            </div>
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}

            <div className="mt-2 flex justify-between">
              <span className="text-muted-foreground text-sm">
                New To Stay Connected?
              </span>
              <Link
                className="text-muted-foreground font-semibold"
                to={'register'}
              >
                Sign Up
              </Link>
            </div>
          </CardContent>

          <Button className="self-center" size="xl" variant="default">
            Log In
          </Button>
        </Card>
      </form>
    </div>
  );
};

export default Login;
