interface InputFieldType {
  type: string;
  name: string;
}

const InputField = ({ type, name }: InputFieldType) => {
  return (
    <input
      type={type}
      placeholder={name}
      className="border-2 border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-300 px-4 py-2 w-full rounded-md"
    />
  );
};

export default InputField;
