import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AMR from '../assets/AMR.jpg';
import agriculture from '../assets/agriculture.jpg';
import ESAP from '../assets/ESAP.jpg';
import AUDIT from '../assets/AUDIT.jpg';
import ESGconsulting from "../assets/ESGconsulting.jpg";

const appData = [
    {
        id: 'esap-management',
        title: 'Streamlining Compliance for Lenders and Borrowers',
        description: 'The ESAP transforms Environmental and Social Action Plan management by centralizing communications and document sharing, automating data management to reduce errors and delays, enhancing visibility to track progress and due dates, and increasing accountability through transparency and action follow-up.',
        image: ESAP,
        accordionData: [
            { heading: 'Enhanced Portfolio Oversight', content: 'Enhanced Portfolio Oversight enables comprehensive management of your projects and investments, ensuring all activities are aligned with strategic goals. By centralizing data and analytics, it provides real-time visibility into portfolio performance. Ultimately, it enhances transparency and accountability across the organization.' },
            { heading: 'Real-time Decision-Making', content: 'Real-time Decision-Making empowers organizations to respond swiftly to changing conditions by providing immediate access to critical data and insights. With up-to-the-minute information, stakeholders can make informed decisions that enhance operational efficiency and drive strategic initiatives.' },
            { heading: 'Improved Collaboration', content: 'Improved Collaboration streamlines communication and coordination among team members, fostering a more cohesive and productive work environment. By centralizing tools and information, it ensures everyone is on the same page, reducing misunderstandings and errors. This leads to more efficient workflows, faster project completion, and enhanced innovation through the collective input of diverse perspectives.' },
            { heading: 'Proactive Engagement', content: 'Proactive Engagement involves anticipating and addressing issues before they escalate, ensuring continuous improvement and customer satisfaction. By actively seeking feedback and monitoring performance metrics, organizations can identify opportunities for enhancement and take timely actions. This approach fosters stronger relationships with stakeholders, reduces response times.' },
        ]
    },
    {
        id: 'amr-management',
        title: 'Fill, Track, Adapt: Complete Your AMR with Confidence',
        description: 'The AMR module streamlines completing the Annual Environmental and Social Performance Report (AESPR) with clear, intuitive form fields, real-time validation to minimize errors, and a progress bar to track completion. Users can resume tasks anytime and easily edit previous entries.',
        image: AMR,
        accordionData: [
            { heading: 'Real-time Validation', content: 'Real-time Validation ensures data accuracy by providing immediate feedback as users input information. This feature helps minimize errors, allowing for a smoother and more efficient reporting process. By catching inaccuracies on the spot, it saves time and reduces the need for extensive revisions, ensuring that your data is reliable and up-to-date.' },
            { heading: 'Visual Storytelling', content: 'Visual Storytelling transforms complex data into clear and actionable insights through the use of charts, graphs, and maps. This feature helps users quickly grasp key information and trends, making it easier to communicate findings to stakeholders. By presenting data visually, it enhances understanding and engagement, enabling more informed decision-making.' },
            { heading: 'Drill-Down Capability', content: 'Drill-Down Capability allows users to seamlessly zoom in on specific metrics for deeper analysis. This feature provides a detailed view of the underlying data, enabling more precise insights and understanding of complex datasets. By focusing on granular details, it helps identify trends, patterns, and anomalies, facilitating more informed and effective decision-making.' },
            { heading: 'Completion Progress Bar', content: 'The Completion Progress Bar helps users stay on track by visually displaying their progress towards completing the Annual Environmental and Social Performance Report (AESPR). This feature provides a clear and motivating overview of the remaining tasks, ensuring that users can manage their time effectively. By showing how much work is left, it encourages timely completion and enhances overall productivity.' },
        ]
    },
    {
        id: 'ehs-excellence',
        title: 'EHS EXCELLENCE',
        description: 'Introducing our advanced audit app, designed to streamline and enhance auditing processes. Featuring a comprehensive dashboard for quick insights, instant task assignments and updates, and the flexibility for online and offline audits, it ensures efficiency and accuracy. Robust data security and live collaboration make audit management safe, reliable, and effective.',
        image: AUDIT,
        accordionData: [
            { heading: 'Online and Offline Audits', content: 'The audit app offers the flexibility to conduct audits anytime, anywhere, with both online and offline modes. This ensures that audits can proceed uninterrupted, even in areas with limited or no internet connectivity. Auditors can collect data and complete tasks in offline mode, with all information seamlessly synchronized once an internet connection is available.' },
            { heading: 'Live Collaboration', content: 'The audit app facilitates live collaboration, allowing auditors and contractors to work together in real-time within the app. This feature eliminates delays by enabling instant communication and coordination on tasks and findings. By providing a collaborative platform, it enhances teamwork and ensures that issues are addressed promptly and efficiently, streamlining the auditing process.' },
            { heading: 'Comprehensive Dashboard', content: 'The audit app features a comprehensive dashboard that provides quick insights and a holistic view of all findings. This centralized dashboard allows users to easily access and monitor key metrics, trends, and statuses. By offering an organized and intuitive interface, it helps users efficiently manage and analyze audit data, leading to more informed decision-making.' },
            { heading: 'Instant Assignments and Updates', content: 'The audit app provides instant assignments and updates, ensuring that contractors receive tasks promptly and auditors stay informed in real-time. This feature facilitates seamless communication and coordination, reducing delays and enhancing productivity. By keeping all stakeholders updated on the latest findings and actions, it streamlines the auditing process and improves overall efficiency.' },
        ]
    },
    {
        id: 'esg-consulting',
        title: 'ESG Consulting',
        description: 'EGP provides top tier social and environmental consulting services across sectors like Infrastructure & Real Estate, Manufacturing, Agri-Business & Forestry, Retail & Hospitality, Financial Institutions & Funds, etc. EGP offers advisory services for ESG risk management, Mergers & Acquisitions (M&A), and EHS & Social Advisory, helping clients enhance ESG performance and mitigate/manage ESG risks globally, helping them achieve to achieve operational excellence.',
        image: ESGconsulting,
        accordionData: [
            { heading: 'ESG Risk Advisory', content: 'The risks and impacts emanating from environment, social and governance (ESG) factors and their management entails a business’s commitment to improve their ESG risk management. EGP provides advisory services to businesses in identifying ESG risks and management measures to enhance their ESG performance.' },
            { heading: 'Merger & Acquisition', content: 'EGP offers services to Clients in Mergers & Acquisitions (M&A) through all stages of investment lifecycle. By providing experienced advisory services EGP supports the Client on target businesses which may be pertinent to making a well-informed M&A decision.' },
            { heading: 'EHS & Social Advisory', content: 'EGP provides advisory services to identify, measure and manage the ESG performance of Clients to achieve improved operational benefits in the long run. The enhancement of ESG performance will support the Client todemonstrate their commitment of ESG factors in their operations.' },
            { heading: 'Social Impact', content: 'With growing economies around the world and ever-changing business needs, managing social risks and impacts has become an absolute necessity. Right community engagement processes, and addressing community needs, help obtain social license to operate, supporting businesses in overall operational excellence.' },
        ]
    }
];

const WhatWeDo = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {/* What We Do Section */}
            <div className="relative bg-cover bg-center py-20" style={{ backgroundImage: `url(${agriculture})` }}>
                <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}
                <div className="relative container mt-20 md:px-12 lg:px-24">
                    <h1 className="text-5xl font-bold text-white mb-6">What We Do</h1>
                    <p className="text-lg text-white mb-6 w-[85%]">
                        Our applications are designed to streamline compliance, enhance collaboration, and improve decision-making processes.
                        Whether you are managing environmental plans, tracking performance reports, or conducting audits, our solutions offer
                        the tools you need to achieve efficiency and accuracy.
                    </p>
                </div>
            </div>

            {appData.map((app, appIndex) => (
                <div key={appIndex} id={app.id} className={`flex flex-col md:flex-row mt-10 items-start justify-between p-6 space-y-8 md:space-y-0 md:space-x-8 ${appIndex % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Text Section */}
                    <div className="md:w-2/5 w-full mx-[7%]">
                        <h1 className="text-3xl font-medium mb-4">{app.title}</h1>
                        <p className="text-md mb-4 text-gray-700">{app.description}</p>

                        {/* Accordion Section */}
                        <div className="rounded-lg shadow-sm">
                            <div className="container mx-auto">
                                {app.accordionData.map((item, index) => (
                                    <div key={index} className="mb-4">
                                        <div
                                            className="flex justify-between items-center cursor-pointer border-b border-gray-300 py-1"
                                            onClick={() => handleAccordionClick(index)}
                                        >
                                            <h4 className="text-base text-gray-600">{item.heading}</h4>
                                            <span className="text-xl font-medium text-gray-600">
                                                {activeIndex === index ? '-' : '+'}
                                            </span>
                                        </div>
                                        {activeIndex === index && (
                                            <div className="mt-4 text-md text-gray-700">
                                                {item.content}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6">
                            <button className="bg-[#00b0f0] text-white px-4 py-1 rounded mr-4">Explore More</button>
                            <NavLink to="/contactPage" className="text-[#00b0f0] hover:underline hover:p-1 text-lg">Schedule demo &rarr;</NavLink>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-3/5 w-full flex flex-col justify-between h-full">
                        <img src={app.image} alt={app.title} className="w-full scale-110 bg-transparent rounded-lg  my-10" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WhatWeDo;
