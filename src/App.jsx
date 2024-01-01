import Card from "./Components/Card";
import Skills from "./Components/Skills";
import TechSkill from "./Components/TechSkill";

import Intro from "./Components/Intro/Intro";
import Header from "./Components/Header/Header";

// Projects import
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";

// import large from "./assets/large-long.png";

function App() {
  return (
    <>
      <div className="max-w-4xl m-auto relative mb-40">
        <Header />
        <main className="relative mt-28 ">
          {/* Intro/Section  */}

          <Intro />

          {/* Project Section  */}

          <section className="mb-8">
            <h1 className="text-2xl p-8 ">Projects</h1>
            <div className="grid grid-cols-2 gap-8">
              <Card src={project1} title="Furniture store landing page" />
              <Card
                src={project2}
                title="Designer furniture store landing page"
              />
              <Card
                src={project3}
                title="Landing page for front-end developer"
              />
              <Card
                src={project4}
                title="Website redesign for The Venus project"
              />
            </div>
          </section>

          {/* technology */}

          <section>
            <h1 className="text-2xl">Technology</h1>
            <div>
              <TechSkill name="HTML" knowledge={100} />
              <TechSkill name="CSS, Sass & Bootstrap" knowledge={80} />
              <TechSkill name="JavaScript, TypeScript, JQuery" knowledge={70} />
              <TechSkill name="UI design in Figma" knowledge={50} />
              <TechSkill name="React" knowledge={88} />
            </div>
          </section>

          {/* Additional Skill  */}

          <div className="m-auto px-4 py-14">
            <h1 className="text-3xl mb-8">Additional Technologies and skill</h1>

            <div className="">
              <div className="relative flex gap-40 mb-8">
                <Skills name="Git" />
                <Skills name="Wordpress" />
                <Skills name="Team Work" />
                <Skills name="Quick Learner" />
              </div>
              <div className="flex gap-40 mt-8">
                <Skills name="Engagement" />
                <Skills name="B2 english" />
                <Skills name="PWD" />
              </div>
            </div>
          </div>

          {/* About me  */}

          <section className="border-t-[1px] border-t-gray-500 ">
            <div>
              <h1 className="text-2xl mt-4">About me</h1>
            </div>
            <div className="relative before:absolute before:top-7 before:w-2 before:h-[80%] before:left-14 before:bg-white before:rounded-full mt-10">
              <div className=" flex flex-col gap-12">
                <div className="flex gap-12 relative before:absolute before:w-4 before:h-4 before:bg-cyan-500 before:left-[52px] before:rounded-full text-xl pt-6">
                  <h1>2015</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure voluptatem praesentium aperiam error animi ullam
                    officiis nostrum laborum similique facilis.
                  </p>
                </div>
                <div className="flex gap-12 relative before:absolute before:w-4 before:h-4 before:bg-cyan-500 before:left-[52px] before:rounded-full text-xl pt-6">
                  <h1>2015</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure voluptatem praesentium aperiam
                  </p>
                </div>
                <div className="flex gap-12 relative before:absolute before:w-4 before:h-4 before:bg-cyan-500 before:left-[52px] before:rounded-full text-xl pt-6">
                  <h1>2015</h1>
                  <p>Lorem ipsum dolor sit amet consectetur </p>
                </div>
                <div className="flex gap-12 relative before:absolute before:w-4 before:h-4 before:bg-cyan-500 before:left-[52px] before:rounded-full text-xl pt-6">
                  <h1>2015</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure voluptatem praesentium aperiam error animi ullam
                    officiis nostrum laborum similique facilis. Lorem ipsum
                    dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      {/* footer  */}

      <section className="mb-10 flex max-w-[970px] w-full m-auto">
        <div className="flex-1">
          <h1>Copyright @ 2023</h1>
        </div>
        <div className="flex gap-8">
          <h2 className="bg-white text-black px-2 cursor-pointer rounded-full">
            FB
          </h2>
          <h2 className="bg-white text-black px-2 cursor-pointer rounded-full">
            Insta
          </h2>
          <h2 className="bg-white text-black px-2 cursor-pointer rounded-full">
            X
          </h2>
        </div>
      </section>
    </>
  );
}

export default App;
