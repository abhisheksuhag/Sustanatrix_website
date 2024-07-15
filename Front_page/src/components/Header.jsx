import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";
import iconEgpLogo from "../assets/iconEgpLogo.png";

const Header = () => {
    const [aboutUsOpen, setAboutUsOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    const solutionsTimer = useRef(null);
    const aboutUsTimer = useRef(null);

    const handleMouseEnterSolutions = () => {
        clearTimeout(solutionsTimer.current);
        setSolutionsOpen(true);
        setAboutUsOpen(false);
    };

    const handleMouseLeaveSolutions = () => {
        solutionsTimer.current = setTimeout(() => {
            setSolutionsOpen(false);
        }, 1000);
    };

    const handleMouseEnterAboutUs = () => {
        clearTimeout(aboutUsTimer.current);
        setAboutUsOpen(true);
        setSolutionsOpen(false);
    };

    const handleMouseLeaveAboutUs = () => {
        aboutUsTimer.current = setTimeout(() => {
            setAboutUsOpen(false);
        }, 1000);
    };

    const handleMouseEnterDropdown = (type) => {
        if (type === "solutions") {
            clearTimeout(solutionsTimer.current);
        } else if (type === "aboutUs") {
            clearTimeout(aboutUsTimer.current);
        }
    };

    const handleMouseLeaveDropdown = (type) => {
        if (type === "solutions") {
            solutionsTimer.current = setTimeout(() => {
                setSolutionsOpen(false);
            }, 2000);
        } else if (type === "aboutUs") {
            aboutUsTimer.current = setTimeout(() => {
                setAboutUsOpen(false);
            }, 2000);
        }
    };

    const controlHeader = () => {
        if (typeof window !== "undefined") {
            setIsAtTop(window.scrollY === 0);
            if (window.scrollY > lastScrollY) {
                // if scroll down
                setShowHeader(false);
            } else {
                // if scroll up
                setShowHeader(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlHeader);

            // cleanup function
            return () => {
                window.removeEventListener("scroll", controlHeader);
            };
        }
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 left-0 z-30 w-full transition-transform duration-1000 ${showHeader ? "translate-y-0" : "-translate-y-full"} ${isAtTop ? "bg-black bg-opacity-50" : "bg-black"}`}
        >
            <div className="container mx-auto flex items-center justify-between px-5 py-3">
                <div className="flex items-center space-x-3">
                    <NavLink to="/">
                        <img src={iconEgpLogo} alt="Logo" className="h-[60px]" />
                    </NavLink>
                    <NavLink to="/">
                        <h1 className="text-2xl font-bold text-white">SUSTAINATRIX</h1>
                    </NavLink>
                </div>
                <nav className="hidden md:flex">
                    <ul className="flex items-center space-x-8">
                        <li className="relative group hover:scale-105">
                            <NavLink
                                to="/"
                                className="text-white font-semibold text-md leading-none py-2 hover:text-[#00B0F0]"
                            >
                                Home
                                <span className="absolute left-0 bottom-[-8px] block h-0.5 w-0 bg-[#00B0F0] transition-all duration-500 group-hover:w-full"></span>
                            </NavLink>
                        </li>
                        <li className="relative group hover:scale-105"
                            onMouseLeave={handleMouseLeaveAboutUs}
                            onMouseEnter={handleMouseEnterAboutUs}>
                            <button
                                className="text-white font-semibold text-md leading-none py-2 hover:text-[#00B0F0]"
                            >
                                About Us
                                <span className="absolute left-0 bottom-[-8px] block h-0.5 w-0 bg-[#00B0F0] transition-all duration-500 group-hover:w-full"></span>
                            </button>
                            {aboutUsOpen && (
                                <div
                                    className="absolute top-full mt-[26px] w-56 bg-[#2B2B2B] shadow-lg rounded-lg"
                                    onMouseEnter={() => handleMouseEnterDropdown("aboutUs")}
                                    onMouseLeave={() => handleMouseLeaveDropdown("aboutUs")}
                                >
                                    <ul className="py-2 text-white">
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <NavLink to="/whoWeAre">Who We Are</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="https://esggp.org/about-us/index.html">About EGP</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="relative group hover:scale-105"
                            onMouseLeave={handleMouseLeaveSolutions}
                            onMouseEnter={handleMouseEnterSolutions}>
                            <button
                                className="text-white font-semibold text-md leading-none py-2 hover:text-[#00B0F0]"
                            >
                                Solutions
                                <span className="absolute left-0 bottom-[-8px] block h-0.5 w-0 bg-[#00B0F0] transition-all duration-500 group-hover:w-full"></span>
                            </button>
                            {solutionsOpen && (
                                <div
                                    className="absolute top-full mt-[26px] w-56 bg-[#2B2B2B] shadow-lg rounded-lg"
                                    onMouseEnter={() => handleMouseEnterDropdown("solutions")}
                                    onMouseLeave={() => handleMouseLeaveDropdown("solutions")}
                                >
                                    <ul className="py-2 text-white">
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <Link to="/whatWeDo#esap-management">ESAP Management</Link>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <Link to="/whatWeDo#amr-management">AMR Management</Link>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <Link to="/whatWeDo#ehs-excellence">EHS Excellence</Link>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <Link to="/whatWeDo#esg-consulting">ESG Consulting</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="relative group hover:scale-105">
                            <NavLink
                                to="/whatWeDo"
                                className="text-white font-semibold text-md leading-none py-2 hover:text-[#00B0F0]"
                            >
                                What We Do
                                <span className="absolute left-0 bottom-[-8px] block h-0.5 w-0 bg-[#00B0F0] transition-all duration-500 group-hover:w-full"></span>
                            </NavLink>
                        </li>
                        <li className="relative group hover:scale-105">
                            <NavLink
                                to="/contactPage"
                                className="text-white font-semibold text-md leading-none py-2 hover:text-[#00B0F0]"
                            >
                                Contact Us
                                <span className="absolute left-0 bottom-[-8px] block h-0.5 w-0 bg-[#00B0F0] transition-all duration-500 group-hover:w-full"></span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white text-2xl"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-gray-800 bg-opacity-90">
                    <ul className="flex flex-col items-center space-y-4 py-5">
                        <li className="relative group hover:scale-105">
                            <NavLink
                                to="/"
                                className="text-white font-semibold text-md leading-none py-2 hover:text-[#00B0F0]"
                            >
                                Home
                                <span className="absolute left-0 bottom-[-8px] block h-0.5 w-0 bg-[#00B0F0] transition-all duration-500 group-hover:w-full"></span>
                            </NavLink>
                        </li>
                        <li>
                            <button
                                className="text-white text-md leading-none py-2 hover:text-gray-300"
                                onClick={() => setAboutUsOpen(!aboutUsOpen)}
                            >
                                About Us
                            </button>
                            {aboutUsOpen && (
                                <ul className="py-2 text-white">
                                    <li className="px-4 py-2 hover:bg-gray-700">
                                        <NavLink to="/whoWeAre">Who We Are</NavLink>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-700">
                                        <a href="https://esggp.org/about-us/index.html">About EGP</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button
                                className="text-white text-md leading-none py-2 hover:text-gray-300"
                                onClick={() => setSolutionsOpen(!solutionsOpen)}
                            >
                                Solutions
                            </button>
                            {solutionsOpen && (
                                <ul className="py-2 text-white">
                                    <li className="px-4 py-2 hover:bg-gray-700">
                                        <Link to="/whatWeDo#esap-management">ESAP Management</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-700">
                                        <Link to="/whatWeDo#amr-management">AMR Management</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-700">
                                        <Link to="/whatWeDo#ehs-excellence">EHS Excellence</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-700">
                                        <Link to="/whatWeDo#esg-consulting">ESG Consulting</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <NavLink
                                to="/whatWeDo"
                                className="text-white text-md leading-none py-2 px-4 rounded-md hover:text-gray-300 bg-[#00a7ff]"
                            >
                                WHAT WE DO
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contactPage"
                                className="text-white text-md leading-none py-2 px-4 rounded-md hover:text-gray-300 bg-[#00a7ff]"
                            >
                                CONTACT US
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
