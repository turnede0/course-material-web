import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2"></p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          We foster STEAM talent.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Be</p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Engineer ?", "Programmer ?", "Game changer ?"]}
            typeSpeed={60}
            backSpeed={60}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Learning for a Lifetime online. at School.at Home. at work.
        </p>

        <button
          className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
          onClick={() => {
            const anchor = document.querySelector("#category");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
