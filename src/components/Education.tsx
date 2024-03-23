import InputField from "./InputField";
import Button from "./Button";
import { Education as EducationType } from "../types/ResumeType";

interface EducationTypes {
  edu:EducationType;
  updateEducation: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteEducation: (id: string) => void;
  id:string;
}

const Education = ({
  edu,
  updateEducation,
  deleteEducation,
  id,
}: EducationTypes) => {
  return (
    <section className="flex flex-col gap-4 py-4">
      <InputField
        handleInputChange={updateEducation}
        name="universityName"
        value={edu.universityName}
        placeholder="University name"
        id={id}
      />
      <InputField
        handleInputChange={updateEducation}
        name="city"
        value={edu.city}
        placeholder="City"
        id={id}
      />
      <InputField
        handleInputChange={updateEducation}
        name="degree"
        value={edu.degree}
        placeholder="Degree"
        id={id}
      />
      <InputField
        handleInputChange={updateEducation}
        name="subject"
        value={edu.subject}
        placeholder="Subject"
        id={id}
      />
      <InputField
        handleInputChange={updateEducation}
        name="fromDate"
        value={edu.fromDate}
        placeholder="From (dd/mm/yy)"
        id={id}
      />
      <InputField
        handleInputChange={updateEducation}
        name="toDate"
        value={edu.toDate}
        placeholder="To (dd/mm/yy)"
        id={id}
      />
      <Button
        handleClick={() =>deleteEducation(id)}
        color="bg-slate-800"
        hoverColor="hover:bg-slate-950"
      >
        Delete
      </Button>
    </section>
  );
};

export default Education;
