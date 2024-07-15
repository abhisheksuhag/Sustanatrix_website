import Contactimage from "../assets/Contactimage.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <div>
            <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center relative" style={{ backgroundImage: `url(${Contactimage})` }}>
                <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark overlay */}
                <div className="relative z-10 max-w-6xl w-full mt-16 mb-4 px-4 sm:px-6 lg:px-8">
                    {/* New Left Side Div */}
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex-1 rounded-lg p-6 mb-8 lg:mb-0 lg:pr-8">
                            <h1 className="text-white text-4xl lg:text-5xl font-bold mb-6">Let's talk</h1>
                            <p className="text-gray-300 text-lg lg:text-xl mb-4">We assist companies of all sizes with their ESG strategy. Get in touch with us to discover how we can help you with yours today.</p>
                            <hr className="my-6 border-gray-300" />
                            <p className="text-gray-300 text-lg lg:text-xl mb-4">With Sustainatrix, you can:</p>
                            <ul className="text-gray-300 text-base lg:text-lg mb-6 space-y-3">
                                <li>• <span className="font-bold">Streamline Compliance:</span> Manage and track your environmental and social action plans.</li>
                                <li>• <span className="font-bold">Track Performance:</span> Simplify the AESPR process with intuitive forms and progress tracking.</li>
                                <li>• <span className="font-bold">Conduct Efficient Audits:</span> Leverage our advanced audit app for comprehensive and flexible auditing processes.</li>
                            </ul>
                        </div>
                        {/* Existing Right Side Div */}
                        <div className="flex-1 bg-gray-800 rounded-lg shadow-md p-8">
                            <h2 className="text-white text-3xl font-bold mb-6">GET IN TOUCH</h2>
                            <form className="space-y-6">
                                <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
                                    <input type="text" className="w-full lg:w-1/2 p-4 rounded-md bg-gray-700 text-white" placeholder="Enter your name" required />
                                    <input type="email" className="w-full lg:w-1/2 p-4 rounded-md bg-gray-700 text-white" placeholder="Enter your email" required />
                                </div>
                                <input type="text" className="w-full p-4 rounded-md bg-gray-700 text-white" placeholder="Subject" required />
                                <textarea className="w-full p-4 rounded-md bg-gray-700 text-white" placeholder="Enter your message" required></textarea>
                                <button type="submit" className="w-full p-4 rounded-md bg-[#00b0f0] text-white hover:bg-[#48b8e8] transition-colors">Send message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* New Full-width Div */}
            <div className="relative w-full p-10 sm:p-20 bg-[#00b0f0]">
                <div className="container mx-auto flex flex-col sm:flex-row justify-around items-center space-y-10 sm:space-y-0">
                    <div className="flex flex-col items-center text-white text-center">
                        <FaPhoneAlt className="text-3xl mb-2" />
                        <span className="text-xl font-bold mb-1">Phone Number</span>
                        <span className="text-lg">+91 1234567890</span>
                    </div>
                    <div className="flex flex-col items-center text-white text-center">
                        <FaEnvelope className="text-3xl mb-2" />
                        <span className="text-xl font-bold mb-1">Email</span>
                        <span className="text-lg">support@esggp.org</span>
                    </div>
                    <div className="flex flex-col items-center text-white text-center">
                        <FaMapMarkerAlt className="text-3xl mb-2" />
                        <span className="text-xl font-bold mb-1">Location</span>
                        <span className="text-lg">Galleria Market</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
