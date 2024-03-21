import InputField from "./InputField";

interface PersonalInfoTypes{
  personalInformation:{
    firstName: string,
    lastName: string,
    title: string,
    photo: string,
    adress: string,
    phoneNumber: string,
    email: string,
    description: string,
  }
}

const PersonalInfo = ({personalInformation}:PersonalInfoTypes) => {
 
  return (
    <>
        <section className="flex flex-col gap-4 pt-12">
        <h2 className="text-2xl font-semibold">Personal Information</h2>
          <InputField value={personalInformation.firstName} name="First Name" />
          <InputField value={personalInformation.lastName} name="Last Name" />
          <InputField value={personalInformation.title} name="Title" />
          <input
            type="file"
            id="photo"
            className="absolute w-[0.1px] h-[0.1px] opacity-0 overflow-hidden z-[-1]"
          />
          <label
            htmlFor="photo"
            className="border-2 text-slate-400 bg-slate-50 border-slate-300 cursor-pointer px-4 py-2 w-full rounded-md "
          >
            Photo
          </label>
          <InputField value={personalInformation.adress} name="Adress" />
          <InputField value={personalInformation.phoneNumber} name="Phone number" />
          <InputField value={personalInformation.email} name="Email" type="email" />
          <InputField value={personalInformation.description} name="Description" />
        </section>
    </>
  );
};

export default PersonalInfo;
