import InputField from "./InputField";
import { PersonalInformation as PersonalInformationType } from "../types/ResumeType";

interface PersonalInfoTypes {
  personalInformation: PersonalInformationType;
  updatePersonalInfo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhoto: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PersonalInfo = ({
  personalInformation,
  updatePersonalInfo,
  handlePhoto
}: PersonalInfoTypes) => {

  return (
    <>
      <form className="flex flex-col gap-4 pt-12">
        <h2 className="text-2xl font-semibold">Personal Information</h2>
        <InputField
          name="firstName"
          handleInputChange={updatePersonalInfo}
          value={personalInformation.firstName}
          placeholder="First Name"
        />
        <InputField
          name="lastName"
          handleInputChange={updatePersonalInfo}
          value={personalInformation.lastName}
          placeholder="Last Name"
        />
        <InputField
          name="title"
          handleInputChange={updatePersonalInfo}
          value={personalInformation.title}
          placeholder="Title"
        />
        <input
          type="file"
          id="photo"
          name="photo"
          onChange={handlePhoto}
          className="absolute w-[0.1px] h-[0.1px] opacity-0 overflow-hidden z-[-1]"
        />
        <label
          htmlFor="photo"
          className="border-2 text-slate-400 bg-slate-50 border-slate-300 cursor-pointer px-4 py-2 w-full rounded-md "
        >
          Photo
        </label>
        <InputField
          name="address"
          handleInputChange={updatePersonalInfo}
          value={personalInformation.address}
          placeholder="Address"
        />
        <InputField
          name="phoneNumber"
          handleInputChange={updatePersonalInfo}
          value={personalInformation.phoneNumber}
          placeholder="Phone number"
        />
        <InputField
          name="email"
          handleInputChange={updatePersonalInfo}
          value={personalInformation.email}
          placeholder="Email"
          type="email"
        />
        <InputField
          name="description"
          handleInputChange={updatePersonalInfo}
          value={personalInformation.description}
          placeholder="Description"
        />
      </form>
    </>
  );
};

export default PersonalInfo;
