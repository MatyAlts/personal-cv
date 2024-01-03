import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Torres Matias everyone calls me Maty. I am a
            Embedded Systems Developer. I experiment with Hardware/Software projects I've created.
          </p>
          <p className="pb-5">
            I am proficient in Embedded skills like Arduino and Proccessing.
          </p>

          <p>
            Also I have skills with Python, JS and Angular. In backend I know Node.js and Java.
          </p>

          <p className="pb-5">
            I am currently studying at the UTN Faculty of Electronic Engineering. So in my spare time I still learn with some online courses.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
