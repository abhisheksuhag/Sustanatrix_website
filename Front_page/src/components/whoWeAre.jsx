import esg from "../assets/esg.jpg";
import esg_consulting from "../assets/esg_consulting.png";
import e_whoweare from "../assets/e_whoweare.jpg";
import s_whoweare from "../assets/s_whoweare.jpg";
import g_whoweare from "../assets/g_whoweare.jpg";
import whoweare01 from "../assets/whoweare01.jpg";


export default function WhoWeAre() {
    return (
        <div>
            {/* What We Do Section */}
            <div className="relative bg-cover bg-center py-20" style={{ backgroundImage: `url(${whoweare01})` }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative container mt-20 md:px-12 lg:px-24">
                    <h1 className="text-5xl font-bold text-white mb-6">Who We Are</h1>
                    <p className="text-lg text-white mb-6 w-[60%]">
                        To the ever-changing environment and business needs, we position ourselves with our deep understanding
                        of technical, cultural and regulatory know-how, meeting client needs.
                    </p>
                </div>
            </div>

            {/* Who We Are Section */}
            <div className="relative bg-white w-full mx-auto">
                <div className="absolute inset-0"></div>
                <div className="relative container md:px-12 lg:px-24">
                    <h1 className="text-5xl font-bold text-black mt-10 mb-6">About Us</h1>
                    <p className="text-lg text-black mb-2">
                        Founded in early 2021 and headquartered in the National Capital Region of India, ESG Global Partners
                        (EGP) is a premier global provider of social and environmental consulting services. We are a diverse
                        team of world-class professionals, including Business Leaders, Project Managers, Thematic Area Experts,
                        Scientists, Engineers, and Analysts. Our experts, hailing from various geographies, come together
                        to deliver top-tier ESG services, ensuring <span className='text-[#00b0f0] font-medium'>International experience, local deliverance!</span>
                    </p>
                    <p className="text-lg text-black mb-6">
                        We aim to create a global network of professionals supporting organizations and clients across regions. By driving compliance with ESG standards, we strive to improve the lives of communities affected by our client's operations. Our clientele ranges from governments and development financial institutions to manufacturing facilities and infrastructure projects, ensuring impactful and sustainable solutions.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row mx-10 mt-10">
                {/* Our Mission Section */}
                <div className="w-full md:w-1/2 flex items-center p-0">
                    <div className="bg-white rounded-lg pr-10 text-balance h-full flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-[#00b0f0] mb-4">Leveraging Technology for ESG Excellence</h2>
                        <p className=" text-gray-700">
                            We leverage advanced technology to drive our ESG initiatives and deliver sustainable solutions.
                            Our innovative digital platforms enable real-time data collection and analysis, providing deep insights
                            into environmental, social, and governance metrics. We monitor and
                            manage resource usage efficiently, reducing our carbon footprint.
                            Furthermore, our cloud-based systems facilitate seamless collaboration
                            and reporting, ensuring all stakeholders are informed and engaged in our ESG efforts.
                            Through these technological advancements, EGP sets a new standard in delivering impactful and
                            measurable ESG outcomes.
                        </p>
                    </div>
                </div>
                {/* Image */}
                <div className="w-full md:w-1/2 mt-10 p-0">
                    <div className="relative w-full pb-[70%]">
                        <img src={esg} alt="Agriculture" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row mx-20 my-14">
                {/* Image */}
                <div className="w-full md:w-1/2 p-0">
                    <div className="relative w-full pb-[70%]">
                        <img src={esg_consulting} alt="Agriculture" className="absolute inset-0 w-full h-full object-scale-down  rounded-lg" />
                    </div>
                </div>
                {/* Our Vision Section */}
                <div className="w-full md:w-1/2 flex items-center ">
                    <div className="bg-white rounded-lg p-10  h-full flex flex-col justify-center">
                        <h2 className="text-2xl  font-bold text-[#00b0f0] mb-4">Our Expertise in ESG Solutions</h2>
                        <p className="text-gray-700">
                            Our expertise in Environmental, Social, and Governance (ESG) practices sets us apart as industry
                            leaders. We deliver bespoke ESG consulting services that are meticulously tailored to address
                            the specific challenges and opportunities faced by our clients. Our multidisciplinary team,
                            comprising environmental scientists, social impact analysts, and governance professionals,
                            boasts over three decades of global experience, spanning more than 41 countries. We excel
                            in embedding sustainability into core business strategies, ensuring compliance with global
                            ESG standards, and driving meaningful, measurable outcomes. Our commitment to fostering strong community
                            partnerships and stakeholder engagement ensures that our solutions not only enhance environmental and social performance
                            but also build resilient, governance frameworks. EGP is dedicated to empowering organizations to
                            achieve their ESG objectives, creating a sustainable and equitable future for all.
                        </p>
                    </div>
                </div>
            </div>

            {/* New Section */}
            <div className="bg-gray-100 w-full p-10">
                <div className="relative container mx-auto">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/5 pr-10">
                            <h1 className="text-4xl font-bold text-black mb-4">Our commitment to <span className="text-[#00b0f0]">ESG</span></h1>
                            <p className="text-lg text-black mb-4">
                                At EGP, we are committed to the ethos of sustainability and attempt to embed the same in all our practices & solutions we offer. We intend to address challenges by providing sustainable solutions which would have a positive impact to environment and communities.
                            </p>
                            <p className="text-lg text-black mb-4">
                                EGP’s vision and mission conveys our business philosophy on how we operate, while our Code of Business and Ethics confirms our commitment for professionalism, deferential treatment and fair play in our day to day operations.
                            </p>
                        </div>
                        <div className="md:w-3/5">
                            <div className="flex flex-col">
                                <div className="flex items-start ">
                                    <div className="w-[60%] pr-6">
                                        <h2 className="text-xl font-bold text-gray-800 mb-2 ">Environmental</h2>
                                        <p className="text-gray-700">
                                            We are dedicated to minimizing our environmental footprint by implementing sustainable practices across all operations. Our commitment to environmental stewardship includes reducing waste, conserving natural resources, and promoting energy efficiency to ensure a healthier planet for future generations.
                                        </p>
                                    </div>
                                    <div className="w-[40%]">
                                        <img src={e_whoweare} alt="People" className="w-full h-full object-contain rounded-lg shadow-md" />
                                    </div>
                                </div>
                                {/* Added line between sections */}
                                <hr className="my-4 border-gray-300" />
                                <div className="flex items-start ">
                                    <div className="w-[60%] pr-6">
                                        <h2 className="text-xl font-bold text-gray-800 mb-2">Social</h2>
                                        <p className="text-gray-700">
                                            We are committed to fostering positive social impacts by supporting local communities, promoting diversity, ensuring fair labor practices, and improving the quality of life for those affected by our operations. We strive to build strong, inclusive societies through our initiatives and partnerships.
                                        </p>
                                    </div>
                                    <div className="w-[40%]">
                                        <img src={s_whoweare} alt="Planet" className="w-full h-full object-contain rounded-lg shadow-md" />
                                    </div>
                                </div>
                                {/* Added line between sections */}
                                <hr className="my-4 border-gray-300" />
                                <div className="flex items-start ">
                                    <div className="w-[60%] pr-6">
                                        <h2 className="text-xl font-bold text-gray-800 mb-2 ">Governance</h2>
                                        <p className="text-gray-700">
                                            We upholds the highest standards of governance by ensuring transparency, accountability, and ethical conduct in all our operations. We are dedicated to robust governance frameworks that enhance decision-making, promote compliance, and foster stakeholder trust.                                        </p>
                                    </div>
                                    <div className="w-[40%] content-center mb-6">
                                        <img src={g_whoweare} alt="Purpose" className="w-full h-full object-contain rounded-lg shadow-md" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
