import React from "react";
import { words } from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* Left: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {" "}
                    {/* Fixed className */}
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2" // Fixed className
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" // Fixed className
                        />
                        {word.text} {/* Added text display */}
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>Into real projects</h1>
              <h1>That deliver results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none ">
              Hi, I'm Aayush, a web developer with a passion for learning.
            </p>
            <Button className="md:w-80 md:h-16 w-60 h-12"
            id="button"
            text="See My Work" />
          </div>
        </header>
        {/* Right: 3D Model */}
        <figure>
          <div className="hero-3d-layout border-red-200 border-2">
            <HeroExperience/>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
