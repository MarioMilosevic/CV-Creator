import InputField from "./InputField";
import Button from "./Button";
interface ExperienceTypes {
  exp: {
    position: string;
    company: string;
    city: string;
    fromDate: string;
    toDate: string;
  }[];
  updateExperience:(e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteExperience:(id:string) => void;
}
const Experience = ({ exp, updateExperience, deleteExperience }: ExperienceTypes) => {
  return (
    <section className="flex flex-col gap-4 py-4 pb-4">
      <InputField
        handleInputChange={updateExperience}
        name="position"
        value={exp.position}
        placeholder="Position"
      />
      <InputField
        handleInputChange={updateExperience}
        name="company"
        value={exp.company}
        placeholder="Company"
      />
      <InputField
        handleInputChange={updateExperience}
        name="city"
        value={exp.city}
        placeholder="City"
      />
      <InputField
        handleInputChange={updateExperience}
        name="fromDate"
        value={exp.fromDate}
        placeholder="From (dd/mm/yy)"
      />
      <InputField
        handleInputChange={updateExperience}
        name="toDate"
        value={exp.toDate}
        placeholder="To (dd/mm/yy)"
      />
      <Button
        handleClick={deleteExperience}
        color="bg-slate-800"
        hoverColor="hover:bg-slate-950"
      >
        Delete
      </Button>
    </section>
  );
};

export default Experience;
