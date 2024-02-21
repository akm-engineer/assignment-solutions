import React from "react";
import landingImage from "../images/cuate.png";

const Extra = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center ">
      <div className="max-w-4xl w-full">
        <h2 className="text-center mb-8 font-bold text-xl md:text-4xl leading-8 ">
          Real Estate-Focused Digital Mastery
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 lg:mr-4 mb-4 lg:mb-0">
            <img
              src={landingImage}
              alt="cuate"
              className="w-full md:w-96 h-auto"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col md:items-start items-center flex-wrap">
            <h2 className="text-center lg:text-left mb-4 text-lg md:text-2xl font-bold ">
              Unlock the Potential of Digital Real Estate Excellence
            </h2>
            <h5 className="text-center lg:text-left  font-signature font-normal text-sm md:text-base ">
              At Osumare, we understand that the real estate landscape demands a
              digital presence that aligns with the intricacies of property
              marketing. Our range of specialized services is meticulously
              designed to catapult your brand's success in the ever-evolving
              digital property market.
            </h5>
            <button className="rounded-full px-8 py-3 mt-4 bg-blue-600 text-white hover:shadow-lg transition duration-300 ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
