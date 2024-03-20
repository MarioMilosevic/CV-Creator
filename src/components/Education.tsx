import InputField from "./InputField";
import Button from "./Button";
const Education = () => {
  return (
    <section className="flex flex-col gap-4 pt-12">
      <h2 className="text-2xl font-semibold">Education</h2>
      <InputField name="University name" />
      <InputField name="City" />
      <InputField name="Degree" />
      <InputField name="Subject" />
      <InputField name="From (dd/mm/yy)" />
      <InputField name="To (dd/mm/yy)" />
      <Button color="bg-slate-800" hoverColor="hover:bg-slate-950">Delete</Button>
      <Button color="bg-slate-800" hoverColor="hover:bg-slate-950">Add Experience</Button>
    </section>
  );
};

export default Education;
