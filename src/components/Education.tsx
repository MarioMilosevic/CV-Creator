import InputField from "./InputField";
import Button from "./Button";

interface EducationTypes {
  education: {
    universityName: string;
    city: string;
    degree: string;
    subject: string;
    fromDate: string;
    toDate: string;
  };
}

const Education = ({ education }: EducationTypes) => {
  return (
    <section className="flex flex-col gap-4 pt-12">
      <h2 className="text-2xl font-semibold">Education</h2>
      <InputField value={education.universityName} name="University name" />
      <InputField value={education.city} name="City" />
      <InputField value={education.degree} name="Degree" />
      <InputField value={education.subject} name="Subject" />
      <InputField value={education.fromDate} name="From (dd/mm/yy)" />
      <InputField value={education.toDate} name="To (dd/mm/yy)" />
      <Button color="bg-slate-800" hoverColor="hover:bg-slate-950">
        Delete
      </Button>
      <Button color="bg-slate-800" hoverColor="hover:bg-slate-950">
        Add Experience
      </Button>
    </section>
  );
};

export default Education;
