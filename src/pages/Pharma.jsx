import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import video from "../images/Video.png";
import avatar from "../images/avatar.png";
import symbol from "../images/Symbol.png";

const Pharma = () => {
  return (
    <div className="container mx-auto text-center  px-4">
      <div className="mb-6 md:mb-10">
        <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4">
          What Our Pharma Partners Say
        </h1>
        <h4 className="text-lg md:text-3xl font-signature">
          Driving Transformations, One Brand at a Time
        </h4>
      </div>
      <div className="w-full lg:w-[1117px] bg-white rounded-lg shadow-lg p-8 md:p-50  md:pb-50 pl-8 lg:pl-44 pr-8 lg:pr-44 flex flex-col  lg:flex-row items-center relative bg-opacity-0">
        {/* Video Image */}
        <img
          src={video}
          alt=""
          className="w-full md:w-[600px] h-auto md:h-[400px] rounded-md mb-6 md:mb-0 hover:opacity-75 transition-opacity duration-300 cursor-pointer "
        />
        {/* Testimonial Details */}
        <div className="lg:ml-8 mt-8 lg:mt-0 flex flex-col lg:items-start lg:justify-center ">
          <div className="flex  md:items-center justify-between  mb-4 md:mb-6">
            <div className="flex items-center gap-2 md:gap-4">
              <img
                src={avatar}
                alt=""
                className="w-8 h-8 md:w-auto md:h-auto"
              />
              <h5 className="font-semibold text-xs md:text-sm">Tabish Khan</h5>
            </div>
            <img src={symbol} alt="" className="h-6 md:h-auto" />
          </div>

          <h5 className="text-lg md:text-sm text-gray-800 mt-2 md:mt-6 max-w-[400px]">
            Osumare's expertise in pharma marketing is unparalleled. Their
            strategies helped us navigate complex regulations while driving
            remarkable growth.
          </h5>
        </div>
        {/* Front and Back icons */}
      </div>
      <div className="mt-5">
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className="text-3xl text-blue-600 mr-4 cursor-pointer hover:text-black transition-colors duration-300 "
        />
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className="text-3xl text-blue-600 cursor-pointer hover:text-black transition-colors duration-300"
        />
      </div>
    </div>
  );
};

export default Pharma;
