import React from 'react';

const logoPaths = [
  './src/assets/osha.png',
  './src/assets/esrs.png',
  './src/assets/pcaf.png',
  './src/assets/sasb.png',
  './src/assets/cdp.png',
  './src/assets/tcfd.png', 
  './src/assets/ifrs.png',
  './src/assets/osha.png',
  './src/assets/esrs.png',
  './src/assets/pcaf.png',
  './src/assets/sasb.png',
  './src/assets/cdp.png',
  './src/assets/tcfd.png', 
  './src/assets/ifrs.png',
  
];

const LogoScroller = () => {
  return (
    <div className="mt-18 relative">
      <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-900">
        {/* Header Text */}
        <div className="text-center mb-[35px]">
          <h1 className="text-4xl font-bold mt-20 animate-fade-in-down transition-all duration-700">
            TAKE YOUR CORPORATE PURPOSE INTO ACTION
          </h1>
          <p className="text-lg mt-4 animate-fade-in-up transition-all duration-700 delay-200">
            More than 100 companies are transforming the future with us
          </p>
          <div className="w-24 h-1 bg-[#00B0F0] mx-auto my-6 animate-fade-in transition-all duration-700 delay-300"></div>
        </div>

        {/* Scrolling Logos */}
        <div className="w-full bg-gray-100 mb-10 py-10">
          <div className="container mx-auto overflow-hidden relative">
            <div className="logo-scroll-wrapper flex whitespace-nowrap">
              <div className="logo-scroll flex">
                {logoPaths.map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`logo-${index}`}
                    className="inline-block mx-4 h-16 transition-transform transform hover:scale-110 hover:opacity-75"
                  />
                ))}
                {logoPaths.map((logo, index) => (
                  <img
                    key={index + logoPaths.length}
                    src={logo}
                    alt={`logo-${index + logoPaths.length}`}
                    className="inline-block mx-4 h-16 transition-transform transform hover:scale-110 hover:opacity-75"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .logo-scroll-wrapper {
          display: flex;
          overflow: hidden;
          width: 200%;
        }
        .logo-scroll {
          display: flex;
          width: 200%;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoScroller;
