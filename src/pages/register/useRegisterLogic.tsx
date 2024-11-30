import { FormDataRegistration } from "@/interfaces/login";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./components/validacionSchema";

export const inputDefaultStyle = `flex-1 border-none outline-none ring-0 
focus-visible:border-none focus-visible:outline-none focus-visible:ring-0`;

export const inputWrapperStyles = `flex items-center px-[5px] rounded-md border focus-within:ring-2 mt-[7px]`;

const useRegistrationLogic = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
      } = useForm<FormDataRegistration>({
        resolver: yupResolver(validationSchema),
      });
      const { password, repeatPassword } = watch();
    
      const onSubmit = (data: FormDataRegistration) => {
        console.log(data);
      };

  return{
     register,
     handleSubmit,
     errors,
     password,
     repeatPassword,
     onSubmit,
  }
};

export default useRegistrationLogic;
