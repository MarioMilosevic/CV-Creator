import InputField from "./InputField";
import Button from "./Button";

interface EducationTypes {
  education: {
    universityName: string;
    city: string;
    degree: string;
    subject: string;
    fromDate: string;
    toDate: string;
  };
}

const Education = ({ education, updateEducation }: EducationTypes) => {
  return (
    <section className="flex flex-col gap-4 pt-12">
      <h2 className="text-2xl font-semibold">Education</h2>
      <InputField
        handleInputChange={updateEducation}
        name="universityName"
        value={education.universityName}
        placeholder="University name"
      />
      <InputField
        handleInputChange={updateEducation}
        name="city"
        value={education.city}
        placeholder="City"
      />
      <InputField
        handleInputChange={updateEducation}
        name="degree"
        value={education.degree}
        placeholder="Degree"
      />
      <InputField
        handleInputChange={updateEducation}
        name="subject"
        value={education.subject}
        placeholder="Subject"
      />
      <InputField
        handleInputChange={updateEducation}
        name="fromDate"
        value={education.fromDate}
        placeholder="From (dd/mm/yy)"
      />
      <InputField
        handleInputChange={updateEducation}
        name="toDate"
        value={education.toDate}
        placeholder="To (dd/mm/yy)"
      />
      <Button
        handleClick={() => console.log("nesto")}
        color="bg-slate-800"
        hoverColor="hover:bg-slate-950"
      >
        Delete
      </Button>
      <Button
        handleClick={() => console.log("nesto")}
        color="bg-slate-800"
        hoverColor="hover:bg-slate-950"
      >
        Add Experience
      </Button>
    </section>
  );
};

export default Education;
