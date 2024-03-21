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
const Experience = ({ experience }: ExperienceTypes) => {
  return (
    <section className="flex flex-col gap-4 pt-12">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <InputField name="position" value={experience.position} name="Position" />
      <InputField name="company" value={experience.company} name="Company" />
      <InputField name="city" value={experience.city} name="City" />
      <InputField
        name="fromData"
        value={experience.fromDate}
        name="From (dd/mm/yy)"
      />
      <InputField
        name="toData"
        value={experience.toDate}
        name="To (dd/mm/yy)"
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
