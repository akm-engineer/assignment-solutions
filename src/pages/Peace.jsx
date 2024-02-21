import React from "react";

const Peace = () => {
  return (
    <div className="flex justify-center items-center relative z-10">
      <div className="max-w-[779px] text-center mb-8 px-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Your Peace of Mind
          </h1>
          <h4 className="text-lg md:text-2xl font-signature leading-normal">
            Through our conversion-focused strategies, we ensure that property
            seekers are not just visitors, but engaged prospects ready to make
            their next move in the real estate market
          </h4>
        </div>
        <div className="color-container" id="spot3"></div>
        <div className="color-container" id="spot2"></div>
        <button className="rounded-full px-8 py-3 lg:py-4 lg:px-10 bg-blue-600 text-white mt-10 hover:shadow-blue transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Peace;
