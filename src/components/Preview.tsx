interface PreviewType {

}

import profileImage from "../assets/20240321_105523.jpg";

const Preview = () => {
  return (
    <div className="fixed top-0 right-0 w-full h-full bg-slate-900 bg-opacity-80 z-10 duration-1000 transition-all">
      <div className="mx-auto flex flex-col items-center mt-2 fixed top-[50%] right-[50%] bg-slate-50 w-[950px] h-screen translate-x-[50%] translate-y-[-50%] z-20">
        <header className="bg-green-600 w-full px-5 pt-5 pb-16 text-slate-100">
          <h2 className="text-3xl font-semibold">Mario Milosevic</h2>
          <p>Front End Developer React JS</p>
        </header>
        <main className="w-full">
          <section className="border border-black w-[70%] pl-4 pr-16 py-4">
            <article>
              <h3 className="semibold text-xl border-b border-b-slate-600">Description</h3>
              <p>
                Visok 185cm tezak nekih 97kg iz mrtvog 220kg benc 135kg cucanj
                170kg total, 525kg
              </p>
            </article>
            <article>
              <h3>Education</h3>
              <div>
                <p>20/09/2015 - 01/06/2019</p>
                <div>
                  <p>Bachelor of Marine Science</p>
                  <p>Marine Science</p>
                  <p>Marine Faculty of Kotor, Kotor</p>
                </div>
              </div>
            </article>
            <article>
              <h3>Experience</h3>
              <div>
                <p>06/06/2018 - 30/09/2018</p>
                <div>
                  <p>Front End Developer</p>
                  <p>Njuskalo HR, Zagreb</p>
                </div>
              </div>
            </article>
          </section>
          <aside>
            <img src={profileImage} alt="Profile Picture" className="w-[300px]"/>
            <h2>Personal Details</h2>
            <h3>Adress</h3>
            <p>Patrijarha Rajacica 39 Novi Sad</p>
            <h2>Phone Number</h2>
            <p>069888799</p>
            <h3>Email</h3>
            <p>mariomilosevic@gmail.com</p>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default Preview;
