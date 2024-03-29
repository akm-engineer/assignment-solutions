import React from "react";
import PropTypes from "prop-types";

const ActionCard = ({ image, title, description }) => {
  return (
    <div className="max-w-[500px] mx-auto text-center bg-white rounded-lg p-8 lg:w-[621px] ">
      <div className="flex flex-col md:flex-row items-center justify-center mb-4 mt-15">
        <img
          src={image}
          alt="title"
          className="w-[100px] h-[100px] md:w-[190px] md:h-[190px] rounded-full bg-gray-200"
        />
      </div>
      <h2 className="text-lg md:text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm md:text-xl text-gray-600">{description}</p>
    </div>
  );
};

ActionCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ActionCard;
