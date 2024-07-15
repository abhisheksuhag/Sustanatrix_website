import { useState, useEffect, useRef } from 'react';
import video1 from '../assets/1.mp4';
import video2 from '../assets/2.mp4';
import video3 from '../assets/3.mp4';
import video4 from '../assets/4.mp4';

const videoArray = [
  { 
    id: 1, 
    video: video1, 
    heading: "Sustainable Energy Management", 
    subheading: "Integrate Renewable Energy Solutions to Improve ESG Scores" 
  },
  { 
    id: 2, 
    video: video2, 
    heading: "Environment Impact Solution", 
    subheading: "Explore Strategies for Effective Carbon Accounting And Reduction" 
  },
  { 
    id: 3, 
    video: video3, 
    heading: "Social Responsibility Programs", 
    subheading: "Implement Initiatives to Enhance Community and Workforce Well-being" 
  },
  { 
    id: 4, 
    video: video4, 
    heading: "Health, Safety, and Environment Excellence", 
    subheading: "Enhance Workplace Safety and Environmental Performance" 
  },
];

const BackgroundVideo = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [animateText, setAnimateText] = useState(true);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateText(false);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoArray.length);
        if (videoRef1.current && videoRef2.current) {
          const nextVideoIndex = (currentVideoIndex + 1) % videoArray.length;
          if (currentVideoIndex % 2 === 0) {
            videoRef1.current.src = videoArray[nextVideoIndex].video;
            videoRef1.current.load();
            videoRef1.current.play();
            videoRef1.current.style.zIndex = '1';
            videoRef2.current.style.zIndex = '0';
          } else {
            videoRef2.current.src = videoArray[nextVideoIndex].video;
            videoRef2.current.load();
            videoRef2.current.play();
            videoRef2.current.style.zIndex = '1';
            videoRef1.current.style.zIndex = '0';
          }
        }
        setTimeout(() => {
          setAnimateText(true);
        }, 200); // Duration of text exit animation
      }, 200); // Duration of text exit animation
    }, 5000); // Change video every 5 seconds

    return () => clearInterval(interval);
  }, [currentVideoIndex]);

  const currentVideo = videoArray[currentVideoIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video ref={videoRef1} autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000" />
      <video ref={videoRef2} autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000" style={{ zIndex: '-1' }} />
      <div className="absolute inset-0 bg-black opacity-65 z-5"></div>
      <div className="absolute inset-y-0 left-0 flex flex-col items-start justify-center z-10 p-4 md:p-8">
        <h1 className={`text-4xl md:text-6xl font-semibold text-white transition-all duration-500 ${animateText ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'} leading-tight max-w-xl`}>
          {currentVideo.heading}
        </h1>
        <h2 className={`text-xl md:text-2xl text-white transition-all duration-500 mt-2 md:mt-4 ${animateText ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
          {currentVideo.subheading}
        </h2>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        .fade-in {
          animation: fadeIn 1s forwards;
        }

        .fade-out {
          animation: fadeOut 1s forwards;
        }
      `}</style>
    </div>
  );
};

export default BackgroundVideo;
