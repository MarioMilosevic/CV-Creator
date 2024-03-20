interface InputFieldType {
  type?: string;
  placeholder: string;
}

const InputField = ({ type, placeholder }: InputFieldType) => {
  return <input type={type} placeholder={placeholder} className="p-2 rounded-md focus:border-red-600"/>;
};

export default InputField;
