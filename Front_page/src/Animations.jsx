import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateOnScroll = () => {
    gsap.from('.fade-in', {
        scrollTrigger: {
            trigger: '.fade-in',
            start: 'top 80%',
            toggleActions: 'play none none none',
            markers: true, // Optional: to visualize the trigger points
        },
        opacity: 0,
        duration: 1,
    });
};
