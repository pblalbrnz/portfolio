import {
  PiArrowUpBold,
  PiAtBold,
  PiCaretDownBold,
  PiGithubLogoFill,
  PiLink,
  PiMoonFill,
  PiPaintBrushBroadFill,
  PiQuestionBold,
  PiStarFill,
  PiStarFourFill,
  PiCircleFill,
} from "react-icons/pi";
import me from "./assets/pablo.png";
import violetTape from "./assets/violet_tape.png";
import subway1 from "./assets/subway1.jpg";
import { projects } from "./projects";
import "./global.css";
import { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import { twMerge } from "tailwind-merge";
import { Tooltip } from "./Tooltip";

function App() {
  const [randomName, setRandomName] = useState({
    1: "Ppabbloo",
    2: "Albbernnaaz",
  });
  const [randomProjectName, setRandomProjectName] = useState({
    1: "Meuuss",
    2: "Pprojeetoss",
  });
  const name = [
    { 1: "Ppabbloo", 2: "Albbernnaaz" },
    { 1: "Paabllo", 2: "AAlbeernaaz" },
    { 1: "Ppabloo", 2: "Albbernnaaz" },
    { 1: "Pablloo", 2: "Allberrnazz" },
    { 1: "Pablo", 2: "Albernaz" },
  ];
  const myProjects = [
    { 1: "Meeuss", 2: "Projeetoss" },
    { 1: "Meuus", 2: "Prrojjettos" },
    { 1: "MMeus", 2: "Proojeetos" },
    { 1: "Meeuss", 2: "Pprojjettos" },
    { 1: "Meus", 2: "Projetos" },
  ];

  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState<number>(0);

  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  const popupRef = useRef<HTMLDivElement | null>(null);
  const [popupWidth, setPopupWidth] = useState<number>(0);
  const [popupVisible, setPopupVisible] = useState({
    isVisible: false,
    index: "",
  });

  const handleClickOutsidePopup = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setPopupVisible({
        isVisible: false,
        index: "",
      });
    }
  };

  useEffect(() => {
    if (popupVisible.isVisible) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutsidePopup);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutsidePopup);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutsidePopup);
    };
  }, [popupVisible.isVisible]);

  const scrolled = document.documentElement.scrollTop;
  const toggleVisible = () => {
    if (scrolled > 200) {
      setScrollTopVisible(true);
    } else if (scrolled <= 300) {
      setScrollTopVisible(false);
    }
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  window.addEventListener("scroll", toggleVisible);

  useEffect(() => {
    const timer = setInterval(() => {
      setScreenWidth(window.screen.width);
      if (contentRef.current) {
        setContentWidth(contentRef.current.offsetWidth);
      }
      popupRef.current && setPopupWidth(popupRef.current.offsetWidth);
    }, 100);

    return () => clearInterval(timer);
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const randomName = Math.floor(Math.random() * name.length);
      const randomProjectName = Math.floor(Math.random() * myProjects.length);
      setRandomName(name[randomName]);
      setRandomProjectName(myProjects[randomProjectName]);
    }, 5000);

    return () => clearInterval(timer);
  }, [name]);

  function bounceArrows() {
    const arrows = Array.from(
      { length: Math.floor(contentWidth / 20) },
      (_, index) => (
        <PiCaretDownBold
          key={index}
          className={twMerge(
            "transition-transform ease-linear",
            scrolled > 200 ? "rotate-180" : "rotate-0"
          )}
        />
      )
    );
    return <div className="animate-bounce flex gap-1">{arrows}</div>;
  }

  return (
    <div className="w-screen flex flex-col items-center scroll-smooth overflow-hidden">
      <div
        ref={contentRef}
        className="lg:h-screen xs:h-fit lg:w-4/5 xs:w-10/12 flex flex-col lg:justify-between lg:gap-24 xs:gap-4"
        id="home"
      >
        <header className="w-full lg:h-20 xs:h-16 flex flex-col items-center justify-end">
          <div className="w-full h-full flex justify-between items-center font-mono text-neutral-800">
            <div className="w-1/3 flex gap-2 justify-start">
              <a
                href="https://github.com/pblalbrnz"
                target="_blank"
                className="p-2 hover:bg-neutral-200 rounded-md noise-light group/headerbtn hover:text-violet-800 ease-linear transition-colors"
              >
                <PiGithubLogoFill
                  size={24}
                  className="group-hover/headerbtn:scale-125 group-hover/headerbtn:-rotate-12 transition-transform ease-in-out"
                />
              </a>
            </div>
            <ul className="flex lg:gap-8 xs:gap-4 items-center justify-center w-1/3">
              <div className="w-1/2 flex justify-end">
                <li className="p-2 hover:bg-neutral-200 rounded-md noise-light group/headerbtn hover:text-violet-800 ease-linear transition-colors">
                  {screenWidth <= 768 ? (
                    <PiMoonFill
                      size={24}
                      className="group-hover/headerbtn:scale-125"
                    />
                  ) : (
                    "Pablo"
                  )}
                </li>
              </div>
              <li className="font-bold">×</li>
              <div className="w-1/2 flex justify-start">
                <a href="#projects">
                  <li className="p-2 hover:bg-neutral-200 rounded-md noise-light group/headerbtn hover:text-violet-800 ease-linear transition-colors">
                    {screenWidth <= 768 ? (
                      <PiPaintBrushBroadFill
                        size={24}
                        className="group-hover/headerbtn:scale-125"
                      />
                    ) : (
                      "Projetos"
                    )}
                  </li>
                </a>
              </div>
            </ul>
            <div className="w-1/3 flex justify-end">
              <a
                href="https://instagram.com/pabloalbrnz"
                target="_blank"
                className="p-2 hover:bg-neutral-200 rounded-md noise-light group/headerbtn hover:text-violet-800 ease-linear transition-colors"
              >
                <PiAtBold
                  size={24}
                  className="-rotate-[24deg] group-hover/headerbtn:scale-125 group-hover/headerbtn:rotate-12 transition-transform ease-in-out"
                />
              </a>
            </div>
          </div>
          <div className="w-full bg-neutral-800 h-px" />
        </header>
        <section className="w-full flex flex-col gap-8 justify-center lg:px-24 xs:px-0 xs:pt-2">
          <div className="flex lg:gap-4 xs:gap-2 xs:justify-center lg:justify-start">
            <Tilt className="rounded hover:rounded-md lg:min-w-52 lg:max-w-52 xs:min-w-28 xs:max-w-28 bg-neutral-300 border border-neutral-800 hover:border-purple-600 lg:h-80 xs:h-48 flex overflow-hidden group/me noise-light hover:bg-purple-500 transition-all shadow shadow-transparent hover:shadow-2xl hover:shadow-purple-400 ease-linear">
              <img
                alt="Pablo photo"
                src={me}
                className="lg:h-72 xs:h-40 self-end grayscale group-hover/me:grayscale-0 ease-linear drop-shadow-[0_0_12px_rgba(20,15,25,0.1)] group-hover/me:drop-shadow-[0_0_12px_rgba(200,155,255)] transition-all group-hover/me:rotate-[2deg] group-hover/me:scale-110"
              />
            </Tilt>
            <span className="absolute lg:text-3xl xs:text-xl -hue-rotate-[67.5deg] brightness-75 lg:mt-48 lg:ml-[11.25rem] xs:mt-28 xs:-ml-[2.5rem] -rotate-[128deg] hover:-rotate-[102deg] ease-linear transition-transform">
              🤙
            </span>
            <div className="flex flex-col lg:gap-8 xs:gap-4 text-neutral-800 lg:w-auto xs:w-36">
              <h2 className="font-stretch uppercase lg:text-3xl xs:text-2xs">
                {randomName[1]}
                <br />
                {randomName[2]}
              </h2>
              <div className="font-mono lg:ml-1 xs:ml-0.5 xs:text-xs lg:text-base flex flex-col gap-2">
                <div className="flex gap-1">
                  <span className="underline text-nowrap underline-offset-4 p-1 bg-purple-500 rounded text-neutral-200 lg:text-lg xs:text-sm">
                    Olá mundo!
                  </span>
                  <span className="lg:text-2xl xs:text-base -hue-rotate-[67.5deg] brightness-75">
                    👋
                  </span>
                </div>
                <div>
                  {"Sou "}
                  <i>
                    <b>Designer Gráfico, Web e UI/UX.</b>
                  </i>
                  <br />
                  Será um prazer fazer parte da{" "}
                  <b>
                    <i>sua</i>
                  </b>{" "}
                  jornada.
                </div>
              </div>
              <div className="xs:pt-12 xs:-ml-[7.75rem] lg:pt-0 lg:ml-0">
                <span className="absolute text-3xl -hue-rotate-[67.5deg] brightness-75 lg:-mt-6 lg:ml-48 xs:-mt-5 xs:ml-60 rotate-[12deg] hover:-rotate-6 ease-linear transition-all hover:drop-shadow-[0px_4px_8px_rgba(100,55,155,0.25)]">
                  ✌️
                </span>
                <button
                  className="lg:text-base xs:text-sm flex gap-4 lg:w-fit xs:w-full font-stretch uppercase py-2 lg:pl-8 lg:pr-12 xs:justify-center ml-1 bg-neutral-300 rounded hover:rounded-md border border-neutral-800 hover:border-transparent hover:bg-purple-500 noise-light hover:text-neutral-200 ease-in-out duration-500 transition-all shadow shadow-transparent hover:shadow-xl hover:shadow-purple-300 group/hire"
                  onClick={() =>
                    window.open(
                      "mailto:pabloalbernazrincon@gmail.com",
                      "_blank"
                    )
                  }
                >
                  Contrate-me
                  <span className="-hue-rotate-[67.5deg] brightness-75 group-hover/hire:hue-rotate-90 group-hover/hire:brightness-100 ease-linear transition-all">
                    ✨
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full lg:h-20 xs:h-16 flex flex-wrap items-center justify-center lg:pb-20 gap-4">
          {bounceArrows()}
        </div>
      </div>
      <div
        className="lg:min-h-screen xs:h-fit w-full bg-neutral-800 noise-dark lg:px-24 xs:px-12 py-4 flex flex-col gap-12"
        id="projects"
      >
        <span className="w-full uppercase text-center font-stretch text-neutral-200 lg:text-lg xs:text-sm">
          {randomProjectName[1]}
          {screenWidth < 672 ? <br /> : " "}
          {randomProjectName[2]}
        </span>
        <div className="flex flex-wrap justify-center gap-8 lg:mx-12 w-fit">
          {projects.map((project) => {
            let accent;
            switch (project.accent) {
              case "red":
                accent = "text-red-300";
                break;
              case "violet":
                accent = "text-violet-300";
                break;
              case "purple":
                accent = "text-purple-300";
                break;
              case "blue":
                accent = "text-blue-300";
                break;
              case "green":
                accent = "text-green-300";
                break;
              default:
                break;
            }
            return (
              <div
                key={project.id}
                className={twMerge("flex flex-col gap-2 w-56")}
              >
                <a
                  href={project.href || "#projects"}
                  target={project.href ? "_blank" : "_parent"}
                  className="w-full font-mono text-neutral-200 font-semibold px-0.5 flex gap-1.5 items-center justify-between group/title"
                >
                  <span className="underline lg:text-lg xs:text-xs group-hover/title:text-neutral-400 ease-linear transition-colors">
                    {project.name || "Projeto sem título"}
                  </span>
                  {project.href && (
                    <span className="font-normal text-neutral-400 group-hover/title:text-neutral-500 ease-linear transition-colors lg:text-sm xs:text-xs">
                      {screenWidth <= 1366 ? (
                        <div className="flex items-center">
                          <Tooltip
                            direction="up"
                            text={project.href.replace("https://", "")}
                            link
                          >
                            (<PiLink />)
                          </Tooltip>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          ({project.href.replace("https://", "")})
                          <PiLink />
                        </div>
                      )}
                    </span>
                  )}
                </a>
                <a
                  className="cursor-pointer hover:brightness-[.8] transition-all ease-linear"
                  onClick={() => {
                    setPopupVisible((prev) => ({
                      isVisible: !prev.isVisible,
                      index: project.id,
                    }));
                  }}
                >
                  <Tilt
                    tiltMaxAngleX={2}
                    tiltMaxAngleY={4}
                    className="flex flex-col gap-2 rounded h-56 aspect-square"
                  >
                    <div
                      className={twMerge(
                        "h-56 aspect-square rounded bg-transparent overflow-hidden flex items-center justify-center",
                        !project.thumb && "border-8"
                      )}
                    >
                      {project.thumb ? (
                        <img
                          src={project.thumb}
                          alt={project.name}
                          className="h-full object-cover"
                        />
                      ) : (
                        <PiQuestionBold className="size-1/2 text-neutral-100" />
                      )}
                    </div>
                  </Tilt>
                </a>
                {popupVisible.isVisible &&
                  popupVisible.index === project.id && (
                    <div
                      className={twMerge(
                        popupVisible.isVisible ? "flex" : "hidden",
                        "fixed w-screen h-screen left-0 top-0 z-20 px-36 py-12 backdrop-blur-[1px] bg-neutral-900-50"
                      )}
                    >
                      <div
                        className="bg-neutral-800 rounded-lg flex overflow-x-hidden overflow-y-scroll flex-col w-full"
                        ref={popupRef}
                      >
                        <div
                          className="flex justify-between items-center h-12 px-8 py-4 bg-neutral-800 fixed rounded-t-lg"
                          style={{ width: `${popupWidth}px` }}
                        >
                          <h2
                            className={twMerge(
                              "font-mono",
                              project.accent ? accent : "text-neutral-300"
                            )}
                          >
                            {project.name}
                          </h2>
                          <button
                            className="text-red-500 hover:text-red-700 transition-all ease-linear"
                            onClick={() => {
                              setPopupVisible((prev) => ({
                                isVisible: !prev.isVisible,
                                index: "",
                              }));
                            }}
                          >
                            <PiCircleFill />
                          </button>
                        </div>
                        <div className="pt-12 flex flex-col gap-2">
                          <div className="flex px-8 pb-2 gap-4 w-10/12">
                            <img
                              src={project.thumb}
                              className="object-cover max-h-48 aspect-square rounded-md"
                            />
                            <div className="flex flex-col gap-4">
                              <h1 className="font-poppins text-xl text-neutral-100">
                                {project.brand_name
                                  ? project.brand_name
                                  : project.name}
                              </h1>
                              <p className="font-poppins text-neutral-300 ">
                                {project.description}
                              </p>
                            </div>
                          </div>
                          {project.imgs &&
                            project.imgs.map((img) => {
                              return <img className="" src={img.img} />;
                            })}
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="fixed -z-50 noise-dark size-full opacity-25" />
      <span className="xs:hidden lg:flex absolute leading-4 font-mono text-2xl rotate-6 opacity-10 top-[47%] left-[75%] text-center blur-[1.6px]">
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
      <PiStarFill className="xs:hidden lg:flex absolute top-[24%] left-[5%] text-6xl rotate-[28deg] text-neutral-800 hover:rotate-[12deg] ease-linear transition-transform" />
      <PiStarFourFill className="xs:hidden lg:flex absolute top-[56%] left-[62%] text-4xl rotate-[48deg] text-neutral-800 hover:-rotate-[24deg] ease-linear transition-transform" />
      <PiStarFourFill className="xs:hidden lg:flex absolute top-[70%] left-[14%] text-xl rotate-[8deg] text-purple-500 hover:-rotate-[90deg] ease-linear transition-transform" />
      <PiStarFourFill className="xs:hidden lg:flex absolute top-[16%] left-[66%] text-2xl text-purple-500 hover:animate-spin ease-linear transition-transform" />
      <div
        onClick={scrollTopVisible ? scrollToTop : () => {}}
        style={{
          cursor: scrollTopVisible ? "pointer" : "default",
          opacity: scrollTopVisible ? "100%" : " 0%",
        }}
        className="fixed lg:mt-[40%] lg:ml-[80%] xs:mt-[160%] xs:ml-[70%] size-12 flex justify-center items-center bg-purple-500 text-neutral-200 rounded-lg hover:bg-purple-500 hover:text-neutral-400 ease-linear transition-all duration-700 cursor-pointer shadow-md shadow-violet-400"
      >
        <PiArrowUpBold size={28} />
      </div>
    </div>
  );
}

export default App;
