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
      firstName: "Mario",
      lastName: "Milosevic",
      title: "Front End Developer",
      photo: "",
      address: "Novo Naselje c-13",
      phoneNumber: "+38269988",
      email: "mariomilosevic887@gmail.com",
      description:
        "Visok 185cm tezak oko 97kg, iz benca 135kg mrtvo 220kg a cucanj 170 total 525, ucim JavaScript tacnije sada vec React JS",
    },
    experience: [
      {
        id: crypto.randomUUID(),
        position: "LifeGuard",
        company: "Sunshine DOO",
        city: "Kotor",
        fromDate: "01/01/2022",
        toDate: "05/05/2024",
      },
    ],
    education: [
      {
        id: crypto.randomUUID(),
        universityName: "Univerzitet Crne Gore",
        city: "Kotor",
        degree: "Bachelor of Marine Science",
        subject: "Meteo",
        fromDate: "15/09/2015",
        toDate: "20/06/2019",
      },
    ],
  });

  const goBackToForm = () => {
    setIsPreviewActive(false);
  };

  const updatePersonalInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setUser((prev) => ({
      ...prev,
      personalInformation: {
        ...prev.personalInformation,
        [name]: value,
      },
    }));
  };

  const updateEducation = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.dir(e.target)
    // const { value, name, id } = e.target;
    // console.log(id)
    // setUser((prev) => ({
    //   ...prev,
    //   education: prev.education.map((el) =>
    //     name in el ? { ...el, [name]: value } : el
    //   ),
    // }));
    const {value, name, id} = e.target;
    setUser(prev => ({
      ...prev,
      education: prev.education.map(edu => edu.id === id ? { ...edu, [name]: value } : edu)
  }));
  console.log(user.education)
  };

  const updateExperience = (e: React.ChangeEvent<HTMLInputElement>) => {
    // trebam da nadjem taj objekat koji ima id, i onda na njemu da operisem
    // console.dir(e.target)
    const { value, name, id } = e.target;
    console.log(id)
    setUser((prev) => ({
      ...prev,
      experience: prev.experience.map((el) =>
        name in el ? { ...el, [name]: value } : el
      ),
    }));
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
    console.log(user)
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
