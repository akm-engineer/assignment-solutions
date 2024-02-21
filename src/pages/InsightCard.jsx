import React from "react";
import PropTypes from "prop-types";

const InsightCard = ({ image, title, description }) => {
  return (
    <div className="mx-4 mt-6 mb-6 md:mb-0 max-w-[586px] bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex flex-col md:flex-row items-center md:items-start md:gap-4">
      <img
        src={image}
        alt={title}
        className="w-20 h-20 md:w-10 md:h-10 rounded-full bg-gray-200 mb-4 md:mb-0"
      />
      <div className="flex flex-col md:flex-grow">
        <h2 className="text-xl md:text-lg font-bold mb-2">{title}</h2>
        <p className="text-sm md:text-xs text-gray-600 md:max-w-[400px] md:whitespace-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

InsightCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default InsightCard;
