import InputField from "./InputField";
import Button from "./Button";
interface ExperienceTypes {
  experience: {
    position: string;
    company: string;
    city: string;
    fromDate: string;
    toDate: string;
  };
}
const Experience = ({ experience, updateExperience }: ExperienceTypes) => {
  return (
    <section className="flex flex-col gap-4 pt-12">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <InputField
        handleInputChange={updateExperience}
        name="position"
        value={experience.position}
        placeholder="Position"
      />
      <InputField
        handleInputChange={updateExperience}
        name="company"
        value={experience.company}
        placeholder="Company"
      />
      <InputField
        handleInputChange={updateExperience}
        name="city"
        value={experience.city}
        placeholder="City"
      />
      <InputField
        handleInputChange={updateExperience}
        name="fromDate"
        value={experience.fromDate}
        placeholder="From (dd/mm/yy)"
      />
      <InputField
        handleInputChange={updateExperience}
        name="toDate"
        value={experience.toDate}
        placeholder="To (dd/mm/yy)"
      />
      <Button
        handleClick={() => console.log("treba da brise")}
        color="bg-slate-800"
        hoverColor="hover:bg-slate-950"
      >
        Delete
      </Button>
      <Button
        handleClick={() => console.log("treba da dodaje")}
        color="bg-slate-800"
        hoverColor="hover:bg-slate-950"
      >
        Add Experience
      </Button>
    </section>
  );
};

export default Experience;
