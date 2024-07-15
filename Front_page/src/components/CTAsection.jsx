import oceanCTA from '../assets/oceanCTA.jpg';
import { NavLink } from 'react-router-dom';

const CTAsection = () => {
  return (
    <div className="relative font-helvetica">
      <div
        className="absolute inset-0 bg-black opacity-70 z-10"
        aria-hidden="true"
      ></div>
      <div
        className="flex flex-col items-center justify-center h-[50vh] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${oceanCTA})` }}
      >
        <div className="text-center mb-8 z-20">
          <h1 className="text-5xl font-bold mb-2 transition duration-500 ease-in-out transform hover:scale-105">
            Elevate Your ESG Impact Today!
          </h1>
          <p className="text-lg font-helvetica-light">Collaborate with us</p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 z-20">
          <NavLink to="/contactpage" className="bg-[#00b0f0] text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:bg-[#00b0f0] hover:scale-105">
            Connect With Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CTAsection;
