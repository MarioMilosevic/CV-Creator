import InputField from "./InputField";
const PersonalInfo = () => {
  return (
    <>
      <main className="bg-slate-100 py-12 px-4 rounded-md">
        <h2 className="text-2xl mb-4">Personal Information</h2>

        <section className="flex flex-col gap-2">
          <InputField name="First Name" />
          <InputField name="Last Name" />
          <InputField name="Title" />
          <input
            type="file"
            id="photo"
            className="absolute w-[0.1px] h-[0.1px] opacity-0 overflow-hidden z-[-1]"
          />
          <label
            htmlFor="photo"
            className="border-2 text-slate-400 bg-slate-50 border-slate-300 px-4 py-2 w-full rounded-md "
          >
            Photo
          </label>
          <InputField name="Adress" />
          <InputField name="Phone number" />
          <InputField name="Email" type="email" />
          <InputField name="Description" />
        </section>
      </main>
    </>
  );
};

export default PersonalInfo;
