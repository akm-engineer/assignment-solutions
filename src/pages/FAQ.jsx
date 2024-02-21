import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleAccordion = (index) => {
    switch (index) {
      case 1:
        setIsOpen1(!isOpen1);
        break;
      case 2:
        setIsOpen2(!isOpen2);
        break;
      case 3:
        setIsOpen3(!isOpen3);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen mb-10">
      <div className="mb-8 text-center ">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Frequently Asked Questions
        </h1>
        <h4 className="text-base md:text-lg font-signature ">
          Pinpoint your audience with precision, ensuring your marketing efforts
          reach those most likely to engage with your brand.
        </h4>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-[800px] ">
        {/* Question 1 */}
        <div className="mt-6">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleAccordion(1)}
          >
            <h2
              className={`text-sm md:text-xl font-semibold ${
                isOpen1 ? "truncate" : ""
              }`}
            >
              1. How does Osumare measure campaign success?
            </h2>
            <FontAwesomeIcon
              icon={isOpen1 ? faAngleUp : faAngleDown}
              className="text-lg ml-2 hover:text-blue-600 transition duration-300"
            />
          </div>
          {isOpen1 && (
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              We believe in measurable results. Our data-driven approach means
              that every campaign's performance is tracked, analyzed, and
              refined for optimal outcomes. We provide regular reports that
              detail key metrics, giving you clear insights into how our
              strategies are driving growth for your brand.
            </p>
          )}
        </div>

        {/* Question 2 */}
        <div className="mt-6">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleAccordion(2)}
          >
            <h2
              className={`text-sm md:text-xl font-semibold ${
                isOpen2 ? "truncate" : ""
              }`}
            >
              2. How does Osumare measure campaign success?
            </h2>
            <FontAwesomeIcon
              icon={isOpen2 ? faAngleUp : faAngleDown}
              className="text-lg ml-2 hover:text-blue-600 transition duration-300"
            />
          </div>
          {isOpen2 && (
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              {" "}
              We believe in measurable results. Our data-driven approach means
              that every campaign's performance is tracked, analyzed, and
              refined for optimal outcomes. We provide regular reports that
              detail key metrics, giving you clear insights into how our
              strategies are driving growth for your brand.
            </p>
          )}
        </div>

        {/* Question 3 */}
        <div className="mt-6">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleAccordion(3)}
          >
            <h2
              className={`text-sm md:text-xl font-semibold ${
                isOpen3 ? "truncate" : ""
              }`}
            >
              3. How does Osumare measure campaign success?
            </h2>
            <FontAwesomeIcon
              icon={isOpen3 ? faAngleUp : faAngleDown}
              className="text-lg ml-2 hover:text-blue-600 transition duration-300"
            />
          </div>
          {isOpen3 && (
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              {" "}
              We believe in measurable results. Our data-driven approach means
              that every campaign's performance is tracked, analyzed, and
              refined for optimal outcomes. We provide regular reports that
              detail key metrics, giving you clear insights into how our
              strategies are driving growth for your brand.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
