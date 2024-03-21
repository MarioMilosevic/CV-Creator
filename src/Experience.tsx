import InputField from "./components/InputField"
import Button from "./components/Button"

const Experience = () => {
  return (
    <section className="flex flex-col gap-4 pt-12">
    <h2 className="text-2xl font-semibold">Experience</h2>
    <InputField name="Position" />
    <InputField name="Company" />
    <InputField name="City" />
    <InputField name="From (dd/mm/yy)" />
    <InputField name="To (dd/mm/yy)" />
    <Button color="bg-slate-800" hoverColor="hover:bg-slate-950">Delete</Button>
    <Button color="bg-slate-800" hoverColor="hover:bg-slate-950">Add Experience</Button>
  </section>
  )
}

export default Experience
