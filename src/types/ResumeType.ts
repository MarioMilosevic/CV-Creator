export interface PersonalInformation {
  firstName: string;
  lastName: string;
  title: string;
  photo: string;
  address: string;
  phoneNumber: string;
  email: string;
  description: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  city: string;
  fromDate: string;
  toDate: string;
}

export interface Education {
  id: string;
  universityName: string;
  city: string;
  degree: string;
  subject: string;
  fromDate: string;
  toDate: string;
}

export interface Resume {
  personalInformation: PersonalInformation;
  experience: Experience[];
  education: Education[];
}


