import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="max-w-lg mx-auto text-center bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center justify-center mb-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-blue-600">
          <FontAwesomeIcon icon={icon} size="lg" />
        </div>
      </div>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
