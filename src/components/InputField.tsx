import { ChangeEvent } from "react";

interface InputFieldType {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const InputField = ({
  type = "text",
  value,
  name,
  handleInputChange,
  placeholder,
  id,
}: InputFieldType) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      className="border-2 bg-slate-50 border-slate-300 cursor-pointer focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-300 px-4 py-2 w-full rounded-md"
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default InputField;
