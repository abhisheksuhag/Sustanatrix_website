import { useRef } from 'react';
import { moduleESG, moduleAMR, moduleEHS, moduleESAP } from '../assets';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { HashLink as NavLink } from 'react-router-hash-link';

const Modules = () => {
    const scrollContainerRef = useRef(null);
    const boxWidth = 370;
    const boxHeight = 400;

    const modules = [
        {
            title: "ESAP Management",
            subtitle: "",
            description: "The ESAP module centralizes Environmental and Social Action Plan management, enhancing visibility, accountability, and automating data processes for improved efficiency.",
            image: moduleESAP,
            moreInfo: "The ESAP transforms Environmental and Social Action Plan (ESAP) management by centralizing communications and document sharing, automating data management to reduce errors and delays, enhancing visibility to track progress and due dates, and increasing accountability through transparency and action follow-up.",
            link: "/whatWeDo#esap-management"
        },
        {
            title: "AMR Management",
            subtitle: "",
            description: "The AMR module streamlines the Annual Environmental and Social Performance Report, offering intuitive forms, real-time validation, and progress tracking.",
            image: moduleAMR,
            moreInfo: "The AMR module streamlines completing the Annual Environmental and Social Performance Report (AESPR) with clear, intuitive form fields, real-time validation to minimize errors, and a progress bar to track completion. Users can resume tasks anytime and easily edit previous entries.",
            link: "/whatWeDo#amr-management"
        },
        {
            title: "EHS Excellence",
            subtitle: "",
            description: "The Audit App enhances auditing processes with a comprehensive dashboard, instant task updates, online/offline flexibility, and robust data security.",
            image: moduleEHS,
            moreInfo: "Introducing our advanced audit app, designed to streamline and enhance auditing processes. Featuring a comprehensive dashboard for quick insights, instant task assignments and updates, and the flexibility for online and offline audits, it ensures efficiency and accuracy. Robust data security and live collaboration make audit management safe, reliable, and effective.",
            link: "/whatWeDo#ehs-excellence"
        },
        {
            title: "ESG Consulting",
            subtitle: "",
            description: "The Audit App enhances auditing processes with a comprehensive dashboard, instant task updates, online/offline flexibility, and robust data security.",
            image: moduleESG,
            moreInfo: "Introducing our advanced audit app, designed to streamline and enhance auditing processes. Featuring a comprehensive dashboard for quick insights, instant task assignments and updates, and the flexibility for online and offline audits, it ensures efficiency and accuracy. Robust data security and live collaboration make audit management safe, reliable, and effective.",
            link: "/whatWeDo#esg-consulting"
        },
    ];

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -boxWidth - 20, behavior: 'smooth' }); // Include the gap in the scroll amount
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: boxWidth + 20, behavior: 'smooth' }); // Include the gap in the scroll amount
        }
    };

    return (
        <div className="slide-up w-full h-full bg-white py-8 flex flex-col items-center relative font-helvetica">
            <div className="text-center mt-[60px] mb-10">
                <h1 className="text-6xl font-bold">Our Innovative Solutions</h1>
                <p className="text-lg text-gray-600 mb-[60px]">Discover our sustainable solutions to protect our planet</p>
            </div>
            <div className="relative w-full flex items-center justify-center">
                <button
                    onClick={scrollLeft}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-800"
                    aria-label="Scroll left"
                >
                    <FaChevronLeft size={24} />
                </button>
                <div ref={scrollContainerRef} className="container mx-auto flex flex-row space-x-16 overflow-hidden scroll-smooth px-5" style={{ paddingLeft: '30px' }}>
                    {modules.map((module, index) => (
                        <div key={index} className="relative flex-shrink-0 transform transition-transform hover:scale-105" style={{ width: boxWidth, height: boxHeight }}>
                            <div className="group perspective-1000" style={{ width: boxWidth, height: boxHeight }}>
                                <div className="relative preserve-3d w-full h-full duration-700 group-hover:rotate-y-180 transition-transform rounded-xl shadow-lg">
                                    <div className="absolute backface-hidden w-full h-full rounded-xl">
                                        <img src={module.image} alt={`Module ${index + 1}`} className="absolute w-full h-full object-cover rounded-xl" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col items-center justify-center rounded-xl">
                                            <h2 className="text-4xl font-bold text-white text-shadow mb-2">{module.title}</h2>
                                            <h3 className="text-lg text-white text-shadow mb-2">{module.subtitle}</h3>
                                            <p className="text-base text-white text-sm text-center text-shadow font-helvetica-light">
                                                {module.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="absolute backface-hidden rotate-y-180 w-full h-full p-4 flex flex-col items-center justify-center rounded-xl">
                                        <img src={module.image} className="absolute w-full h-full object-cover rounded-xl" />
                                        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl p-4 flex flex-col items-center justify-center">
                                            <p className="text-base text-white text-sm text-center font-helvetica-light">
                                                {module.moreInfo}
                                            </p>
                                            <NavLink smooth to={module.link} className="mt-4 bg-gray-800 text-white p-2 rounded-md hover:bg-gray-600 transition-colors">Know More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={scrollRight}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-800"
                    aria-label="Scroll right"
                >
                    <FaChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default Modules;
