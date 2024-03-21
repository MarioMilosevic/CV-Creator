import InputField from "./InputField";
import Button from "./Button";
interface ExperienceTypes {
  experience:{
    position:string,
    company: string,
    city:string,
    fromDate:string,
    toDate: string,
  }
}
const Experience = ({experience}:ExperienceTypes) => {
 
  return (
    <section className="flex flex-col gap-4 pt-12">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <InputField value={experience.position} name="Position" />
      <InputField value={experience.company} name="Company" />
      <InputField value={experience.city} name="City" />
      <InputField value={experience.fromDate} name="From (dd/mm/yy)" />
      <InputField value={experience.toDate} name="To (dd/mm/yy)" />
      <Button color="bg-slate-800" hoverColor="hover:bg-slate-950">
        Delete
      </Button>
      <Button color="bg-slate-800" hoverColor="hover:bg-slate-950">
        Add Experience
      </Button>
    </section>
  );
};

export default Experience;
