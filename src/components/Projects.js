import React from "react";
import stickerBot from "../assets/stickerbot.png";
import pong from "../assets/pong.png";
import getInspirred from "../assets/get-inspirred.png";
import prenotami from "../assets/prenotami.png";

const Projects = () => {
  const projects = [
    {
      img: pong,
      title: "pong",
      desc: " A game based on PONG 1972. Built with Arduino and Processing ",
      code: "https://github.com/MatyAlts/pong-arduino",
    },
    {
      img: prenotami,
      title: "prenotami bot",
      desc: "Free program to book a date in prenot@mi mendoza. Built with Python",
      code: "https://github.com/MatyAlts/PrenotamiBOT-mendoza-",
    },
    {
      img: stickerBot,
      title: "sticker bot whatsapp",
      desc: "A WhatsApp bot to make easily stickers. Built with Javascript and WhatsApp API.",
      code: "https://github.com/MatyAlts/stickerbot-wsp",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with Arduino
            and Processing. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
