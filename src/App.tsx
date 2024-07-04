import {
  PiAtBold,
  PiHouseFill,
  PiMoonFill,
  PiPaintBrushBroadFill,
  PiStarFourFill,
} from "react-icons/pi";
import me from "./assets/pablo.png";
import violetTape from "./assets/violet_tape.png";
import subway1 from "./assets/subway1.jpg";
import { projects } from "./projects";
import "./global.css";
import { useEffect, useState } from "react";

function App() {
  const [randomName, setRandomName] = useState({
    1: "Ppabbloo",
    2: "Albbernnaaz",
  });
  const name = [
    { 1: "Ppabbloo", 2: "Albbernnaaz" },
    { 1: "Paabllo", 2: "AAlbeernaaz" },
    { 1: "Ppabloo", 2: "Albbernnaaz" },
    { 1: "Pablloo", 2: "Allberrnazz" },
    { 1: "Pablo", 2: "Albernaz" },
  ];

  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  useEffect(() => {
    const timer = setInterval(() => {
      setScreenWidth(window.screen.width);
    }, 100);

    return () => clearInterval(timer);
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const random = Math.floor(Math.random() * name.length);
      setRandomName(name[random]);
    }, 5000);

    return () => clearInterval(timer);
  }, [name]);

  return (
    <div className="w-full flex flex-col items-center scroll-smooth">
      <div
        className="lg:h-screen xs:h-fit lg:w-4/5 xs:w-10/12 flex flex-col lg:justify-between lg:gap-24 xs:gap-4"
        id="home"
      >
        <header className="w-full lg:h-20 xs:h-16 flex flex-col items-center justify-end">
          <div className="w-full h-full flex justify-between items-center font-mono text-neutral-800">
            <div className="w-1/3 flex justify-start">
              <a href="http://github.com/pblalbrnz" target="_blank">
                <PiMoonFill
                  size={24}
                  className="-rotate-90 hover:text-violet-800 ease-linear transition-colors"
                />
              </a>
            </div>
            <ul className="flex lg:gap-8 xs:gap-4 items-center justify-center w-1/3">
              <div className="w-1/2 flex justify-end">
                <a href="/">
                  <li className="p-2 rounded-lg">
                    {screenWidth <= 768 ? <PiHouseFill size={24} /> : "Home"}
                  </li>
                </a>
              </div>
              <li className="font-bold">×</li>
              <div className="w-1/2 flex justify-start">
                <a href="#projects">
                  <li className="p-2 rounded-lg">
                    {screenWidth <= 768 ? (
                      <PiPaintBrushBroadFill size={24} />
                    ) : (
                      "Projects"
                    )}
                  </li>
                </a>
              </div>
            </ul>
            <div className="w-1/3 flex justify-end">
              <a
                href="https://instagram.com/pabloalbrnz"
                target="_blank"
                className="text-xs opacity-50"
              >
                {screenWidth <= 768 ? <PiAtBold size={16} /> : "@pabloalbrnz"}
              </a>
            </div>
          </div>
          <div className="w-full bg-neutral-800 h-px" />
        </header>
        <section className="w-full flex flex-col gap-8 justify-center lg:px-24 xs:px-0">
          <div className="flex lg:gap-4 xs:gap-2 xs:justify-center lg:justify-start">
            <div className="rounded hover:rounded-md lg:min-w-52 lg:max-w-52 xs:min-w-28 xs:max-w-28 bg-neutral-300 border border-neutral-800 hover:border-transparent lg:h-80 xs:h-48 flex overflow-hidden group/me noise-light hover:bg-purple-500 transition-all shadow shadow-transparent hover:shadow-2xl hover:shadow-purple-400 ease-linear">
              <img
                alt="Pablo photo"
                src={me}
                className="lg:h-72 xs:h-40 self-end grayscale group-hover/me:grayscale-0 ease-linear drop-shadow-[0_0_12px_rgba(20,15,25,0.1)] group-hover/me:drop-shadow-[0_0_12px_rgba(200,155,255)] transition-all group-hover/me:rotate-[2deg] group-hover/me:scale-110"
              />
              <span className="absolute lg:text-3xl xs:text-xl -hue-rotate-[67.5deg] brightness-75 lg:mt-48 lg:ml-[11.25rem] xs:mt-28 xs:ml-[5.75rem] -rotate-[128deg] hover:-rotate-[102deg] ease-linear transition-transform">
                🤙
              </span>
            </div>
            <div className="flex flex-col lg:gap-8 xs:gap-4 text-neutral-800 lg:w-auto xs:w-36">
              <h2 className="font-stretch uppercase lg:text-3xl xs:text-2xs">
                {randomName[1]}
                <br />
                {randomName[2]}
              </h2>
              <span className="font-mono lg:ml-1 xs:ml-0.5 xs:text-xs lg:text-base">
                Hello World!{" "}
                <span className="lg:text-2xl xs:text-base -hue-rotate-[67.5deg] brightness-75">
                  👋
                </span>
                <br />I am a{" "}
                <i>
                  <b>Web, UI/UX and Graphic Designer.</b>
                </i>
                <br />
                It will be a pleasure to be part of{" "}
                <b>
                  <i>your</i>
                </b>{" "}
                journey.
              </span>
              <div className="xs:pt-12 xs:-ml-[7.75rem] lg:pt-0 lg:ml-0">
                <span className="absolute text-3xl -hue-rotate-[67.5deg] brightness-75 lg:-mt-4 lg:ml-48 xs:-mt-5 xs:ml-60 rotate-[12deg] hover:-rotate-6 ease-linear transition-all hover:drop-shadow-[0px_4px_8px_rgba(100,55,155,0.25)]">
                  ✌️
                </span>
                <button
                  className="lg:text-base xs:text-sm flex gap-4 lg:w-fit xs:w-full font-stretch uppercase py-2 lg:pl-8 lg:pr-12 xs:justify-center ml-1 bg-neutral-300 rounded hover:rounded-md border border-neutral-800 hover:border-transparent hover:bg-purple-500 noise-light hover:text-neutral-200 ease-linear transition-all shadow shadow-transparent hover:shadow-xl hover:shadow-purple-300 group/hire"
                  onClick={() =>
                    window.open(
                      "mailto:pabloalbernazrincon@gmail.com",
                      "_blank"
                    )
                  }
                >
                  Hire me{" "}
                  <span className="-hue-rotate-[67.5deg] brightness-75 group-hover/hire:hue-rotate-0 group-hover/hire:brightness-100 ease-linear transition-all">
                    ✨
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <footer className="w-full lg:h-20 xs:h-16 flex flex-col items-center justify-start">
          <div className="w-full bg-neutral-800 h-px" />
        </footer>
      </div>
      <div
        className="lg:min-h-screen xs:h-fit w-full bg-neutral-800 noise-dark px-20 py-12 flex flex-col gap-12"
        id="projects"
      >
        <span className="w-full uppercase text-center font-stretch text-neutral-200 lg:text-lg xs:text-sm">
          My proojeects
        </span>
        <div className="flex flex-wrap gap-8">
          {projects.map((project) => {
            return (
              project.thumb && (
                <div className="flex flex-col gap-2 overflow-hidden">
                  <a
                    href={project.href || "#"}
                    target={project.href ? "_blank" : "_parent"}
                    className="w-fit font-mono text-neutral-200 font-semibold px-0.5 underline lg:text-lg xs:text-xs"
                  >
                    {project.name || "Untitled project"}
                  </a>
                  <div className="flex flex-col gap-2 overflow-x-auto">
                    <div className="flex scroll-smooth gap-2 scroll-visible">
                      <div className="lg:min-w-128 lg:min-h-128 lg:max-w-128 lg:max-h-128 xs:min-w-56 xs:min-h-56 xs:max-w-56 xs:max-h-56 aspect-square rounded bg-neutral-200 flex flex-col overflow-hidden">
                        <img
                          src={project.thumb}
                          alt={project.name}
                          className="h-full object-cover"
                        />
                      </div>
                      {project.imgs &&
                        project.imgs.map((p) => {
                          return (
                            <div className="lg:min-w-128 lg:min-h-128 lg:max-w-128 lg:max-h-128 xs:min-w-56 xs:min-h-56 xs:max-w-56 xs:max-h-56 aspect-square rounded bg-neutral-200 flex flex-col overflow-hidden">
                              <img
                                src={p.img}
                                alt=""
                                className="h-full object-cover"
                              />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
      <div className="fixed -z-10 noise-dark size-full opacity-25" />
      <span className="xs:hidden lg:flex absolute leading-4 font-mono text-2xl rotate-6 opacity-10 top-[47%] left-[75%] text-center blur-[0.25px]">
        xxxxxxxxxx
        <br />
        xxxxxxxxxxxx
        <br />
        xxxxxxxxxxx
        <br />
        xxxxxxxxxxxx
        <br />
        xxxxxxxxxxx
        <br />
        xxxxxxxxxxxx
        <br />
        xxxxxxxxxxx
        <br />
        xxxxxxxxxx
        <br />
        xxxxxxxxxx
        <br />
        xxxxxxxxxxx
        <br />
      </span>
      <span className="xs:hidden lg:flex absolute -z-20 leading-4 font-mono text-2xl -rotate-[9deg] opacity-10 top-[16%] left-[12%] text-center blur-[0.75px]">
        xxxxxxxxxx
        <br />
        xxxxxxxxxxxx
        <br />
        xxxxxxxxxxx
        <br />
        xxxxxxxxxxxx
        <br />
        xxxxxxxxxxx
        <br />
        xxxxxxxxxxxx
        <br />
        xxxxxxxxxxx
        <br />
        xxxxxxxxxx
        <br />
        xxxxxxxxxx
        <br />
        xxxxxxxxxxx
        <br />
      </span>
      <div className="xs:hidden lg:flex absolute top-[56%] left-[70%] flex flex-col gap-1.5 -rotate-6 hover:-rotate-[5deg] ease-linear transition-transform">
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
      </div>
      <div className="xs:hidden lg:flex absolute ml-[72%] mt-[10%] w-48 drop-shadow-[1px_8px_8px_rgba(0,0,0,0.1)] group/polaroid hover:drop-shadow-[2px_16px_8px_rgba(200,155,255,0.75)] ease-linear transition-all saturate-[0.38] hover:saturate-[0.8]">
        <img
          src={subway1}
          className="absolute p-2 pb-12 w-48 bg-neutral-200 -rotate-[8deg] blur-[0.75px] hover:blur-[0.25px] group-hover/polaroid:-rotate-[6deg] ease-linear transition-transform"
        />
        <img
          src={violetTape}
          className="absolute w-20 left-12 -top-2 -rotate-[12deg] opacity-75 contrast-150 brightness-[1.22] group-hover/polaroid:-rotate-[10deg] ease-linear transition-transform"
        />
        <span className="absolute font-mono -rotate-[8deg] text-sm left-[3.5rem] top-[9.5rem] text-neutral-400 font-semibold italic opacity-40 group-hover/polaroid:-rotate-[6deg] ease-linear transition-transform">
          life is good
        </span>
      </div>
      <PiStarFourFill className="xs:hidden lg:flex absolute top-[24%] left-[5%] text-6xl rotate-[28deg] text-neutral-800 hover:rotate-[12deg] ease-linear transition-[transform]" />
      <PiStarFourFill className="xs:hidden lg:flex absolute top-[56%] left-[62%] text-4xl rotate-[48deg] text-neutral-800 hover:-rotate-[24deg] ease-linear transition-[transform]" />
      <PiStarFourFill className="xs:hidden lg:flex absolute top-[70%] left-[14%] text-xl rotate-[8deg] text-purple-500 hover:-rotate-[90deg] ease-linear transition-[transform]" />
      <PiStarFourFill className="xs:hidden lg:flex absolute top-[16%] left-[66%] text-2xl text-purple-500 hover:animate-spin ease-linear transition-[transform]" />
    </div>
  );
}

export default App;
