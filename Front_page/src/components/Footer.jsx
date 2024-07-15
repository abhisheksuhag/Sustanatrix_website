import { HashLink as Link } from "react-router-hash-link";
import { FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import iconEgpLogo from "../assets/iconEgpLogo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const AboutUs = [
    { name: "Who We Are", link: "/whoWeAre" },
    { name: "About EGP", link: "https://esggp.org/about-us/index.html" },
  ];
  const Solutions = [
    { name: "ESAP Management", link: "/whatWeDo#esap-management" },
    { name: "AMR Management", link: "/whatWeDo#amr-management" },
    { name: "EHS Excellence", link: "/whatWeDo#ehs-excellence" },
    { name: "ESG Consulting", link: "/whatWeDo#esg-consulting" },
  ];
  const QuickLinks = [
    { name: "Home", link: "/" },
    { name: "Contact Us", link: "/contactPage" },
    { name: "Terms & Conditions", link: "/" },
    { name: "Privacy Policy", link: "/" },
  ];

  return (
    <footer className="bg-black text-gray-400 pt-6 pb-2  inset-x-0 bottom-0 font-helvetica">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-start">
        <div className="w-full md:w-auto flex flex-col items-start md:items-start mb-6 md:mb-0">
          <div className="flex items-center space-x-3">
            <NavLink to="/">
              <img src={iconEgpLogo} alt="Logo" className="h-[60px]" />
            </NavLink>
            <NavLink to="/">
              <h1 className="text-2xl font-bold text-white font-helvetica">SUSTAINATRIX</h1>
            </NavLink>
          </div>
          <div className="flex space-x-6 md:space-x-10 mt-4 mr-6 ml-14 md:mt-8">
            <a
              href="mailto:info@sustainatrix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out font-helvetica-light"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out font-helvetica-light"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out font-helvetica-light"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="w-full md:w-auto mb-6 md:mb-0">
          <ul className="space-y-2 font-helvetica-light">
            <li className="text-[#00b0f0] font-bold text-lg mb-3 transition duration-500 ease-in-out transform hover:scale-105 font-helvetica">
              About Us
            </li>
            {AboutUs.map((item, index) => (
              <li
                key={index}
                className="text-xs transition duration-300 ease-in-out transform hover:text-white hover:translate-x-1"
              >
                {item.link.startsWith('http') ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
                ) : (
                  <NavLink to={item.link}>{item.name}</NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-auto mb-6 md:mb-0">
          <ul className="space-y-2 font-helvetica-light">
            <li className="text-[#00b0f0] font-bold text-lg mb-3 transition duration-500 ease-in-out transform hover:scale-105 font-helvetica">
              Solutions
            </li>
            {Solutions.map((item, index) => (
              <li
                key={index}
                className="text-xs transition duration-300 ease-in-out transform hover:text-white hover:translate-x-1"
              >
                <Link smooth to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-auto mb-6 md:mb-0">
          <ul className="space-y-2 font-helvetica-light">
            <li className="text-[#00b0f0] font-bold text-lg mb-3 transition duration-500 ease-in-out transform hover:scale-105 font-helvetica">
              Quick Links
            </li>
            {QuickLinks.map((item, index) => (
              <li
                key={index}
                className="text-xs transition duration-300 ease-in-out transform hover:text-white hover:translate-x-1"
              >
                <NavLink to={item.link}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center bg-black text-gray-300 text-xs mt-6 md:mt-10 font-helvetica-light">
        Copyright © 2024 | Powered by ESG Global Partners Private Limited
        <br />
        Esggp.org
      </div>
    </footer>
  );
};

export default Footer;
