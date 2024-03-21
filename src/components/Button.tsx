import { ReactNode } from "react";

interface ButtonTypes {
  children: ReactNode;
  color: string;
  hoverColor: string;
  handleClick:() => void
}

const Button = ({ children, color, hoverColor, handleClick }: ButtonTypes) => {
  return (
    <button
      className={`${color} text-slate-100 font-semibold text-xl duration-300 px-4 py-2 w-full rounded-md ${hoverColor}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
