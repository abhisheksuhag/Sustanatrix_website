import { featuresTurtle } from "../assets";

const Features = () => {
    const features = [
        {
            imgSrc: '/path/to/your/image1.png', // Update with the actual path to your image
            title: 'SUSTAINABILITY',
            description: 'We place the ocean at the center of our decisions, seeking innovative and shared solutions for its cleanliness, while redefining how we create value in business.',
        },
        {
            imgSrc: '/path/to/your/image2.png', // Update with the actual path to your image
            title: 'TRACEABILITY',
            description: 'By demonstrating how we clean the sea and revalue waste, we make our actions visible and quantifiable, ensuring maximum transparency in our operations.',
        },
        {
            imgSrc: '/path/to/your/image3.png', // Update with the actual path to your image
            title: 'COOPERATION',
            description: 'Cooperation is present in everything we do. Only in this way can we innovate and act on global challenges together with companies, fishermen, partners, and agents of society.',
        },
    ];

    return (
        <div className="absolute w-full h-[70vh] bg-cover bg-center flex items-center justify-center">
          <img src={featuresTurtle} alt="A sea turtle swimming in a clean ocean" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
                <div className="text-center text-white mb-10 fade-in">
                    <h1 className="text-4xl font-bold text-shadow">Our Commitment</h1>
                    <p className="text-lg text-shadow">Driving impact through sustainability, traceability, and cooperation.</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-16">
                    {features.map((feature, index) => (
                        <div key={index} className="text-white flex flex-col items-center text-center max-w-xs p-4 transform transition-transform hover:scale-105">
                            <div className="mb-4">
                                <img src={feature.imgSrc} alt={feature.title} className="w-20 h-20 object-contain" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
                            <p className="text-base">{feature.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
      );
    };

export default Features;
