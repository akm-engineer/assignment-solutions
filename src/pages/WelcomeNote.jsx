import React from "react";
import home from "../images/head.png";
import "../App.css";

const WelcomeNote = () => {
  return (
    <div className="maindeck flex justify-center items-center flex-col mt-12 md:mt-32 flex-wrap">
      <div className="flex justify-center items-center flex-col">
        <div className="">
          <h1 className="font-bold text-2xl md:text-4xl leading-10 md:leading-72 text-center mt-4 md:mt-10">
            Elevate <span className="text-blue-700">Real Estate Success</span>{" "}
            with
          </h1>
          <h1 className="font-bold text-2xl md:text-4xl leading-10 md:leading-72 text-center mt-2 md:mt-4">
            Osumare's Digital Expertise
          </h1>
        </div>
        <div className="color-container" id="spot1"></div>
        <div>
          <p className="font-normal text-lg md:text-xl leading-7 md:leading-36 text-center mt-2 md:mt-4">
            Tailored Solutions for Thriving in the Digital Real Estate Landscape
          </p>
        </div>
        <button className="bg-blue-600 text-white rounded-full mt-4 md:mt-6 px-12 md:px-24 py-2 md:py-3 font-semibold hover:shadow-blue transition duration-300 block md:inline-block mx-auto">
          Get Started
        </button>
      </div>
      <img src={home} alt="home" className="mt-6 md:mt-0" id="home-image" />
    </div>
  );
};

export default WelcomeNote;
