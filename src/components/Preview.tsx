import defaultProfile from "../assets/profile.jpeg";

interface PreviewTypes {
  personalInformation: {
    firstName: string;
    lastName: string;
    title: string;
    photo: string;
    adress: string;
    phoneNumber: string;
    email: string;
    description: string;
  };
  education: {
    universityName: string;
    city: string;
    degree: string;
    subject: string;
    fromDate: string;
    toDate: string;
  };
  experience: {
    position: string;
    company: string;
    city: string;
    fromDate: string;
    toDate: string;
  };
  goBack:() => void;
}

const Preview = ({
  personalInformation,
  education,
  experience,
  goBack
}: PreviewTypes) => {
  return (
    <div className="fixed flex top-0 right-0 w-full h-full bg-slate-900 bg-opacity-80 z-10 duration-1000 transition-all">
      <div className="absolute mt-20 ml-12 flex gap-4">
        <button className="rounded-lg px-6 py-3 bg-green-500 flex gap-2 justify-center items-center text-slate-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
            />
          </svg>

          <span className="">Print</span>
        </button>
        <button className="rounded-lg px-6 py-3 bg-red-500 flex gap-2 justify-center items-center text-slate-100" onClick={goBack}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.2"
            baseProfile="tiny"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
          >
            <path d="M 19.164 19.547 c -1.641 -2.5 -3.669 -3.285 -6.164 -3.484 v 1.437 c 0 0.534 -0.208 1.036 -0.586 1.414 c -0.756 0.756 -2.077 0.751 -2.823 0.005 l -6.293 -6.207 c -0.191 -0.189 -0.298 -0.444 -0.298 -0.713 s 0.107 -0.524 0.298 -0.712 l 6.288 -6.203 c 0.754 -0.755 2.073 -0.756 2.829 0.001 c 0.377 0.378 0.585 0.88 0.585 1.414 v 1.704 c 4.619 0.933 8 4.997 8 9.796 v 1 c 0 0.442 -0.29 0.832 -0.714 0.958 c -0.095 0.027 -0.19 0.042 -0.286 0.042 c -0.331 0 -0.646 -0.165 -0.836 -0.452 Z m -7.141 -5.536 c 2.207 0.056 4.638 0.394 6.758 2.121 c -0.768 -3.216 -3.477 -5.702 -6.893 -6.08 c -0.504 -0.056 -0.888 -0.052 -0.888 -0.052 v -3.497 l -5.576 5.496 l 5.576 5.5 v -3.499 l 1.023 0.011 Z"></path>
          </svg>
          <span>Back</span>
        </button>
      </div>
      <div className="mx-auto flex flex-col items-center mt-2 fixed top-[50%] right-[50%] bg-slate-50 w-[950px] h-screen translate-x-[50%] translate-y-[-50%] z-20">
        <header className="bg-green-600 w-full px-5 pt-5 pb-16 text-slate-100">
          <h2 className="text-3xl font-semibold">
            {`${personalInformation.firstName} ${personalInformation.lastName}`}{" "}
          </h2>
          <p>{personalInformation.title}</p>
        </header>
        <main className="w-full flex flex-1">
          <section className="w-[70%] pl-4 pr-16 py-4">
            <article className="min-h-[100px]">
              <h3 className="font-semibold text-green-500 text-xl border-b border-b-slate-600">
                Description
              </h3>
              <p className="py-2 italic pr-2">
                {personalInformation.description}
              </p>
            </article>
            <article className="min-h-[100px]">
              <h3 className="font-semibold text-green-500 text-xl border-b border-b-slate-600">
                Education
              </h3>
              <div className="flex gap-24 pr-2 py-2">
                <p className="font-semibold">{education.fromDate}</p>
                <div>
                  <p className="font-semibold">{education.degree}</p>
                  <p>{education.subject}</p>
                  <p>{education.universityName}</p>
                </div>
              </div>
            </article>
            <article className="min-h-[100px]">
              <h3 className="font-semibold text-green-500 text-xl border-b border-b-slate-600">
                Experience
              </h3>
              <div className="flex gap-24 pr-2 py-2">
                <p className="font-semibold">{experience.fromDate}</p>
                <div>
                  <p className="font-semibold">{experience.position}</p>
                  <p>{experience.company}</p>
                  <p>{experience.city}</p>
                </div>
              </div>
            </article>
          </section>
          <aside className="w-[30%] bg-slate-200 flex-1">
            <div className="h-full flex flex-col">
              <img
                src={defaultProfile}
                alt="Profile Picture"
                className="w-full h-[260px] object-cover"
              />
              <div className="p-2">
                <h2 className="font-semibold text-green-500 text-xl border-b border-b-slate-600">
                  Personal Details
                </h2>
                <div className="flex flex-col gap-2 py-2">
                  <div>
                    <h2 className="font-semibold">Adress</h2>
                    <p>{personalInformation.adress}</p>
                  </div>
                  <div>
                    <h2 className="font-semibold ">Phone Number</h2>
                  </div>
                  <p>{personalInformation.phoneNumber}</p>
                  <div>
                    <h2 className="font-semibold ">Email</h2>
                    <p>{personalInformation.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default Preview;
