import { CardHeader, CardTitle } from "@/components/ui/card";
import { FC, PropsWithChildren } from "react";

const FormTitle: FC<PropsWithChildren> = ({children}) => {
  return (
    <CardHeader>
            <CardTitle className="mt-[20px] self-center text-xl">
              {children}
            </CardTitle>
    </CardHeader>
  )
};

export default FormTitle;
