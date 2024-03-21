import { useState } from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview";
import Button from "./components/Button";
function App() {
  const [isPreviewActive, setIsPreviewActive] = useState(false);
  const [personalInformation, setPersonalInformation] = useState({
    firstName: "",
    lastName: "",
    title: "",
    photo: "",
    adress: "",
    phoneNumber: "",
    email: "",
    description: "",
  });

  const [experience, setExperience] = useState({
    position: "",
    company: "",
    city: "",
    fromDate: "",
    toDate: "",
  });

  const [education, setEducation] = useState({
    universityName: "",
    city: "",
    degree: "",
    subject: "",
    fromDate: "",
    toDate: "",
  });
  return (
    <>
      <Header />
      <Wrapper>
        {isPreviewActive && <Preview />}
        {!isPreviewActive && (
          <>
            <PersonalInfo personalInformation={personalInformation}/>
            <Education education={education}/>
            <Experience experience={experience}/>
            <div className="flex flex-col gap-4 pt-12 pb-8">
              <Button hoverColor="hover:bg-green-600" color="bg-green-500">
                Preview
              </Button>
              <Button hoverColor="hover:bg-red-600" color="bg-red-500">
                Reset
              </Button>
            </div>
          </>
        )}
      </Wrapper>
    </>
  );
}

export default App;
