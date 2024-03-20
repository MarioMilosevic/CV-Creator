import InputField from "./InputField";
const PersonalInfo = () => {
  const information = [
    {
      name: "First Name",
      type: "text",
    },
    {
      name: "Last Name",
      type: "text",
    },
    {
      name: "Title",
      type: "text",
    },
    {
      name: "Photo",
      type: "file",
    },
    {
      name: "Adress",
      type: "text",
    },
    {
      name: "Phone number",
      type: "text",
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "Description",
      type: "text",
    },
  ];
  return (
    <>
      <main className="bg-slate-100 py-12 px-4 rounded-md">
        <h2 className="text-2xl mb-4">Personal Information</h2>
        <section className="flex flex-col gap-2">
        {information.map(info => <InputField name={info.name} type={info.type}/>)}
        </section>
      </main>
    </>
  );
};

export default PersonalInfo;
