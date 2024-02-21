import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
      <div>
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 break-words">
            Connect with Our Digital Marketing Experts
          </h1>
          <h4 className="text-lg md:text-base font-signature break-words">
            Reach Out for Tailored Strategies and Results-Driven Solutions.
            Let's Elevate Your Online Presence Together.
          </h4>
        </div>
        <div className="color-container" id="spot4"></div>
        <div className="color-container" id="spot5"></div>

        <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-[904px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left side - Contact Information */}
            <div>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mt-4 md:mt-10 mb-4"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-4"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-4"
                />
              </div>
            </div>

            {/* Right side - Message */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 break-words">
                Message
              </h2>
              <textarea
                rows="9"
                placeholder="Your Message"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button className="font-semibold rounded-[32px] px-[64px] py-[16.5px] lg:py-[16.5px] lg:px-[64px] gap-[4px] bg-blue-600 text-white hover:shadow-blue transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
