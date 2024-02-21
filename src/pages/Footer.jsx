import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/logo.png";
import {
  faHome,
  faBlog,
  faAddressCard,
  faBriefcase,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faYoutube,
  faLinkedin,
  faFacebook,
  faPinterest,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-white p-8">
      <footer className="bg-gradient-to-r from-blue-400 to-blue-200 text-white py-8 rounded-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:items-start px-4 h-full ">
          {/* Part 1 */}
          <div className="mb-8 md:w-full md:mb-0">
            <img
              src={logo}
              alt="Logo"
              className="w-24 h-auto mb-4 mx-auto md:mx-0"
            />
            <h4 className="text-sm md:text-base font-semibold text-center md:text-left mb-4">
              The best digital marketing agency in Pune with a proven track
              record of consistently delivering quality service.
            </h4>

            <div className="mb-6">
              <h5 className="text-sm md:text-base font-semibold mb-2 text-center md:text-left">
                Address
              </h5>
              <p className="text-xs md:text-sm text-center md:text-left">
                Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi,
                Pune-14, Maharastra, India.
              </p>
            </div>

            <div className="mb-6">
              <h5 className="text-sm md:text-base font-semibold mb-2 text-center md:text-left">
                Contact
              </h5>
              <div className="text-xs md:text-sm text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="mr-2 hover:text-blue-600 transition duration-300"
                  />
                  <p>Phone: +1234567890</p>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mr-2 hover:text-blue-600 transition duration-300"
                  />
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 2 */}
          <div className="mb-8 md:mx-8 md:w-1/3">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-center md:text-left">
              Menu
            </h2>
            <ul className="text-center md:text-left">
              <li className="mb-2">
                <Link to="/" className="flex items-center">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="mr-2 hover:text-blue-600 transition duration-300"
                  />
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/work" className="flex items-center">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="mr-2 hover:text-blue-600 transition duration-300"
                  />
                  Work
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="flex items-center">
                  <FontAwesomeIcon
                    icon={faBlog}
                    className="mr-2 hover:text-blue-600 transition duration-300"
                  />
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="flex items-center">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    className="mr-2 hover:text-blue-600 transition duration-300"
                  />
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/career" className="flex items-center">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="mr-2 hover:text-blue-600 transition duration-300"
                  />
                  Career
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="flex items-center">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="mr-2 hover:text-blue-600 transition duration-300"
                  />
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Part 3 */}
          <div className="flex flex-wrap justify-center md:justify-end md:w-1/3">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-center md:text-right w-full">
              Socials
            </h2>
            <div className="flex justify-center md:justify-end w-full">
              <div className="flex flex-wrap justify-center md:justify-end">
                <a href="#" className="mr-4 mb-4">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                    className="hover:text-blue-600 transition duration-300"
                  />
                </a>
                <a href="#" className="mr-4 mb-4">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size="lg"
                    className="hover:text-blue-600 transition duration-300"
                  />
                </a>
                <a href="#" className="mr-4 mb-4">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="lg"
                    className="hover:text-blue-600 transition duration-300"
                  />
                </a>
                <a href="#" className="mr-4 mb-4">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="lg"
                    className="hover:text-blue-600 transition duration-300"
                  />
                </a>
                <a href="#" className="mr-4 mb-4">
                  <FontAwesomeIcon
                    icon={faPinterest}
                    size="lg"
                    className="hover:text-blue-600 transition duration-300"
                  />
                </a>
                <a href="#" className="mr-4 mb-4">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    size="lg"
                    className="hover:text-blue-600 transition duration-300"
                  />
                </a>
                <a href="#" className="mr-4 mb-4">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="lg"
                    className="hover:text-blue-600 transition duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center mt-8">
        <p className="text-sm md:text-base font-semibold">
          © 2024 Your Company. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
