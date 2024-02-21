import React from "react";
import house from "../images/house-searching.png";

const Inquiry = () => {
  return (
    <div className="container mx-auto text-center mb-8 px-4 mt-10 lg:mt-15">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Driving Property Inquiries to Conversions
      </h1>
      <h4 className="text-xl md:text-3xl font-signature">
        Streamlined Strategies for Real Estate Success
      </h4>
      <div className="flex flex-col lg:flex-row items-center lg:items-start mt-10">
        <div className="lg:w-2/5 mb-4 lg:mb-0">
          <img
            src={house}
            alt="house"
            className="w-full h-auto lg:w-auto md:max-w-sm"
          />
        </div>
        <div className="lg:w-3/5 lg:ml-8 whitespace-normal">
          <h2 className="text-lg md:text-3xl lg:text-3xl font-bold mb-4 mt-8">
            Optimized Path to Property Purchase
          </h2>
          <h5 className="text-sm md:text-lg lg:text-xl font-signature font-normal mb-4">
            In the dynamic realm of real estate, the journey from a property
            inquiry to a successful conversion demands a well-crafted approach.
            At Osumare, we specialize in guiding potential buyers through this
            journey seamlessly, maximizing inquiries-turned-conversions with
            expert strategies.
          </h5>
          <div className="flex justify-center md:justify-center lg:justify-start mt-4">
            <button className="rounded-full px-8 py-3 bg-blue-600 text-white hover:shadow-lg transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
