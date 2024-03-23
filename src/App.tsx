import { useState } from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview";
import Button from "./components/Button";

// za sliku da vidim
// za print da vidim 

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
      description:
        "",
    },
    experience: [
      {
        id: crypto.randomUUID(),
        position: "",
        company: "",
        city: "",
        fromDate: "",
        toDate: "",
      },
    ],
    education: [
      {
        id: crypto.randomUUID(),
        universityName: "",
        city: "",
        degree: "",
        subject: "",
        fromDate: "",
        toDate: "",
      },
    ],
  });

  const goBackToForm = () => {
    setIsPreviewActive(false);
  };

  const updatePersonalInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      personalInformation: {
        ...prev.personalInformation,
        [name]: value,
      },
    }));
  };

  const updateEducation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, id } = e.target;
    setUser((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [name]: value } : edu
      ),
    }));
  };

  const updateExperience = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, id } = e.target;
    setUser((prev) => ({
      ...prev,
      experience: prev.experience.map((el) =>
        el.id === id ? { ...el, [name]: value } : el
      ),
    }));
    console.log(user.experience)
  };

  const addEducation = () => {
    const newEducation = {
      id: crypto.randomUUID(),
      universityName: "",
      city: "",
      degree: "",
      subject: "",
      fromDate: "",
      toDate: "",
    };
    setUser((prev) => ({
      ...prev,
      education: [...prev.education, newEducation],
    }));
  };

  const addExperience = () => {
    const newExperience = {
      id: crypto.randomUUID(),
      position: "",
      company: "",
      city: "",
      fromDate: "",
      toDate: "",
    };
    setUser((prev) => ({
      ...prev,
      experience: [...prev.experience, newExperience],
    }));
  };

  const deleteExperience = (id) => {
    setUser((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  const deleteEducation = (id) => {
    setUser((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  };

  return (
    <>
      <Header />
      <Wrapper>
        {isPreviewActive && <Preview user={user} goBackToForm={goBackToForm} />}
        {!isPreviewActive && (
          <>
            <PersonalInfo
              personalInformation={user.personalInformation}
              updatePersonalInfo={updatePersonalInfo}
            />
            <h2 className="text-2xl font-semibold pt-12">Education</h2>
            {user.education.map((edu) => {
              return (
                <Education
                  edu={edu}
                  key={edu.id}
                  id={edu.id}
                  updateEducation={updateEducation}
                  deleteEducation={() => deleteEducation(edu.id)}
                />
              );
            })}
            <Button
              handleClick={addEducation}
              color="bg-slate-800"
              hoverColor="hover:bg-slate-950"
            >
              Add Education
            </Button>
            <h2 className="text-2xl font-semibold pt-12">Experience</h2>

            {user.experience.map((exp) => {
              return (
                <Experience
                  exp={exp}
                  key={exp.id}
                  id={exp.id}
                  updateExperience={updateExperience}
                  deleteExperience={() => deleteExperience(exp.id)}
                />
              );
            })}
            <Button
              handleClick={addExperience}
              color="bg-slate-800"
              hoverColor="hover:bg-slate-950"
            >
              Add Experience
            </Button>

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
