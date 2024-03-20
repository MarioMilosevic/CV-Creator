import InputField from "./InputField";
const Education = () => {
  return (
    <section className="flex flex-col gap-4 pt-12">
        <h2 className="text-2xl">Education</h2>
      <InputField name="University name" />
      <InputField name="City" />
      <InputField name="Degree" />
      <InputField name="Subject" />
      <InputField name="From (dd/mm/yy)"/>
      <InputField name="To (dd/mm/yy)"/>
    </section>
  );
};

export default Education;
