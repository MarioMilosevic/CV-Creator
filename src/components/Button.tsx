import { ReactNode } from "react";

interface ButtonTypes {
  children: ReactNode;
  color: string;
  hoverColor: string;
}

const Button = ({ children, color, hoverColor }: ButtonTypes) => {
  return (
    <button
      className={`${color} text-slate-100 font-semibold text-xl duration-300 px-4 py-2 w-full rounded-md ${hoverColor}`}
    >
      {children}
    </button>
  );
};

export default Button;
