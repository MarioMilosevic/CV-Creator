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

  const [user, setUser] = useState({
    personalInformation: {
      firstName: "",
      lastName: "",
      title: "",
      photo: "",
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
    },
    experience: [
      {
        position: "",
        company: "",
        city: "",
        fromDate: "",
        toDate: "",
      },
    ],
    education: [
      {
        universityName: "",
        city: "",
        degree: "",
        subject: "",
        fromDate: "",
        toDate: "",
      },
    ],
  });

  const goBack = () => {
    setIsPreviewActive(false);
  };

  const updatePersonalInfo = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setUser((prev) => ({
      ...prev,
      personalInformation: {
        ...prev.personalInformation,
        [name]: value,
      },
    }));
  };

  const updateEducation = (e) => {
    const { value, name } = e.target;

    setUser((prev) => {
      const updatedEducation = prev.education.map((el) => {
        if (name in el) {
          return { ...el, [name]: value };
        }
        return el;
      });
      return { ...prev, education: updatedEducation };
    });
  };

  return (
    <>
      <Header />
      <Wrapper>
        {isPreviewActive && <Preview user={user} goBack={goBack} />}
        {!isPreviewActive && (
          <>
            <PersonalInfo
              personalInformation={user.personalInformation}
              updatePersonalInfo={updatePersonalInfo}
            />
            <Education
              education={user.education}
              updateEducation={updateEducation}
            />
            <Experience experience={user.experience} />
            <div className="flex flex-col gap-4 pt-12 pb-8">
              <Button
                handleClick={() => setIsPreviewActive(true)}
                hoverColor="hover:bg-green-600"
                color="bg-green-500"
              >
                Preview
              </Button>
              <Button
                handleClick={() => console.log("treba da resetuje")}
                hoverColor="hover:bg-red-600"
                color="bg-red-500"
              >
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
