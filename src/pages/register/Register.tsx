import { Button } from '@/components/ui/button';
import { Card, CardContent} from '@/components/ui/card';
import React from 'react';
import FormTitle from './components/form-title/formTitle';
import { FormInput, FormInputPassword } from './components/Input/Input';
import FormLink from './components/form-link/FromLink';
import useRegistrationLogic from './useRegisterLogic';

const Register: React.FC = () => {
 const {  
  register,
  handleSubmit,
  errors,
  password,
  repeatPassword,
  onSubmit, 
} = useRegistrationLogic()

  return (
    <div className="mt-[150px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="m-auto w-[400px]"
      >
        <Card className="flex-col items-center justify-center">
          <FormTitle>Sign in</FormTitle>
          <CardContent>
            <div className="*:mb-[25px]">
              <FormInput
                register={register}
                errors={errors}
                label={'E-mail'}
                name={'email'}
                type={'email'}
              />
              <FormInputPassword
                register={register}
                errors={errors}
                label={'Password'}
                name={'password'}
                type={'password'}
              />
              <FormInputPassword
                register={register}
                errors={errors}
                label={'Repeat password'}
                name={'repeatPassword'}
                type={'password'}
                password={password}
                repeatPassword={repeatPassword}
              />

              <FormLink/>
            </div>
            <div className="flex justify-center">
              <Button className="mb-[30px] w-full" variant="default">
                Log In
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default Register;
