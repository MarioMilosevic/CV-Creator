import InputField from "./InputField";
const PersonalInfo = () => {
  const information = [
    {
      title: "First Name",
      type: "text",
    },
    {
      title: "Last Name",
      type: "text",
    },
    {
      title: "Title",
      type: "text",
    },
    {
      title: "Photo",
      type: "file",
    },
    {
      title: "Adress",
      type: "text",
    },
    {
      title: "Phone number",
      type: "text",
    },
    {
      title: "email",
      type: "email",
    },
    {
      title: "Description",
      type: "text",
    },
  ];
  return (
    <>
      <main className="bg-slate-100 py-12 px-4 rounded-md">
        <h2 className="text-2xl mb-4">Personal Information</h2>

        <section className="flex flex-col gap-2">

        {information.map(info => <InputField placeholder={info.title} type={info.type}/>)}

          {/* <InputField placeholder="First Name" />
          <InputField placeholder="Last Name" />
          <InputField placeholder="Title" />
          <InputField placeholder="Photo" type="file" />
          <InputField placeholder="Adress" />
          <InputField placeholder="Phone number" />
          <InputField placeholder="Email" type="email" />
          <InputField placeholder="Description" /> */}
        </section>
      </main>
    </>
  );
};

export default PersonalInfo;
