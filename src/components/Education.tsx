import InputField from "./InputField";
import Button from "./Button";

interface EducationTypes {
  edu: {
    universityName: string;
    city: string;
    degree: string;
    subject: string;
    fromDate: string;
    toDate: string;
  }[];
  updateEducation:(e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteEducation:(id:string) => void;
}

const Education = ({ edu, updateEducation, deleteEducation }: EducationTypes) => {
  return (
    <section className="flex flex-col gap-4 py-4">
      <InputField
        handleInputChange={updateEducation}
        name="universityName"
        value={edu.universityName}
        placeholder="University name"
      />
      <InputField
        handleInputChange={updateEducation}
        name="city"
        value={edu.city}
        placeholder="City"
      />
      <InputField
        handleInputChange={updateEducation}
        name="degree"
        value={edu.degree}
        placeholder="Degree"
      />
      <InputField
        handleInputChange={updateEducation}
        name="subject"
        value={edu.subject}
        placeholder="Subject"
      />
      <InputField
        handleInputChange={updateEducation}
        name="fromDate"
        value={edu.fromDate}
        placeholder="From (dd/mm/yy)"
      />
      <InputField
        handleInputChange={updateEducation}
        name="toDate"
        value={edu.toDate}
        placeholder="To (dd/mm/yy)"
      />
      <Button
        handleClick={deleteEducation}
        color="bg-slate-800"
        hoverColor="hover:bg-slate-950"
      >
        Delete
      </Button>
     
    </section>
  );
};

export default Education;
