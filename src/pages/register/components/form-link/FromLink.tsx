import { Link } from "react-router-dom";

const FormLink = () => {
  return (
    <div className="flex justify-between px-[10px] text-[15px] text-[#5c5a5a]">
      <span>Already have an account?</span>
      <Link className="font-[500] text-primary" to={'/login'}>
        Sign in
      </Link>
    </div>
  );
};

export default FormLink;
