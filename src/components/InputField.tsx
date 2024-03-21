interface InputFieldType {
  type?: string;
  name?: string;
  value?: string;
}

const InputField = ({ type = "text", name, value }: InputFieldType) => {
  return (
    <input
      type={type}
      placeholder={name}
      className="border-2 bg-slate-50 border-slate-300 cursor-pointer focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-300 px-4 py-2 w-full rounded-md"
      value={value}
    />
  );
};

export default InputField;
