interface PreviewType {}

import profileImage from "../assets/20240321_105523.jpg";

const Preview = () => {
  return (
    <div className="fixed top-0 right-0 w-full h-full bg-slate-900 bg-opacity-80 z-10 duration-1000 transition-all">
      <div className="mx-auto flex flex-col items-center mt-2 fixed top-[50%] right-[50%] bg-slate-50 w-[950px] h-screen translate-x-[50%] translate-y-[-50%] z-20">
        <header className="bg-green-600 w-full px-5 pt-5 pb-16 text-slate-100">
          <h2 className="text-3xl font-semibold">Mario Milosevic</h2>
          <p>Front End Developer React JS</p>
        </header>
        <main className="w-full flex flex-1">
          <section className="w-[70%] pl-4 pr-16 py-4">
            <article>
              <h3 className="font-semibold text-green-500 text-xl border-b border-b-slate-600">
                Description
              </h3>
              <p className="py-2 italic pr-2">
                Visok 185cm tezak nekih 97kg iz mrtvog 220kg benc 135kg cucanj
                170kg total, 525kg
              </p>
            </article>
            <article>
              <h3 className="font-semibold text-green-500 text-xl border-b border-b-slate-600">
                Education
              </h3>
              <div className="flex gap-24 pr-2 py-2">
                <p className="font-semibold">20/09/2015 - 01/06/2019</p>
                <div>
                  <p className="font-semibold">Bachelor of Marine Science</p>
                  <p>Marine Science</p>
                  <p>Marine Faculty of Kotor, Kotor</p>
                </div>
              </div>
            </article>
            <article>
              <h3 className="font-semibold text-green-500 text-xl border-b border-b-slate-600">
                Experience
              </h3>
              <div className="flex gap-24 pr-2 py-2">
                <p className="font-semibold">20/09/2015 - 01/06/2019</p>
                <div>
                  <p className="font-semibold">Front End Developer</p>
                  <p>Quantox Tehnologies</p>
                  <p>Marine Faculty of Kotor, Kotor</p>
                </div>
              </div>
            </article>
          </section>
          <aside className="w-[30%] bg-slate-200 flex-1">
            <div className="h-full flex flex-col">
              <img
                src={profileImage}
                alt="Profile Picture"
                className="w-full object-cover"
              />
              <div className="p-2">
                <h2 className="font-semibold text-green-500 text-xl border-b border-b-slate-600">
                  Personal Details
                </h2>
                <div className="flex flex-col gap-2 py-2">
                  <div>
                    <h2 className="font-semibold ">Adress</h2>
                    <p>Patrijarha Rajacica 39 Novi Sad</p>
                  </div>
                  <div>
                    <h2 className="font-semibold ">Phone Number</h2>
                  </div>
                  <p>069888799</p>
                  <div>
                    <h2 className="font-semibold ">Email</h2>
                    <p>mariomilosevic@gmail.com</p>
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
