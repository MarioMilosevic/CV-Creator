import { Resume } from "./types/ResumeType";

export const resume: Resume = {
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
};
