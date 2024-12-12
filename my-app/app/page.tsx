"use client";
import dynamic from 'next/dynamic';
import { Testimonial } from "@/components/ui/animated-testimonials";
//what we do(info about the website, game and resources)
//who are we( perhaps horizontal scroll)
// const AnimatedTestimonials = dynamic(
//   () => import('@/components/ui/animated-testimonials').then((mod) => mod.AnimatedTestimonials),
//   {
//     loading: () => <p> </p>, 
//     ssr: false, 
//   }
// );

// export default function AboutMe() {
//   const testimonials: Testimonial[] = [
//     {
//       quote: "I don't know. Play Moomoo.io.",
//       name: "Jayden",
//       designation: "Absolute Beast of a Gamer",
//       src: "/jayden.jpg",
//     },
//     {
//       quote: "My favourite hobby's prolly getting rich.",
//       name: "Yu Ting",
//       designation: "Professional TTS generator, part-time yapper/innovator",
//       src: "/yuting.jpg",
//     },
//     {
//       quote: "Ask for money, get advice. Ask for advice, get money twice.",
//       name: "Javen",
//       designation: "Pitbull Lover/ Pitbull's Lover",
//       src: "/javen.jpeg",
//     },
//     {
//       quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       name: "Ivyn",
//       designation: "What The Cup Fan",
//       src: "/ivyn.jpeg",
//     },
//   ];
//   return (
//     <div className="mt-10">
//       <AnimatedTestimonials testimonials={testimonials} />
//     </div>
//   );
// }

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Cast the result to HTMLElement explicitly
    const horizontalScrollContainer = document.querySelector('.horizontal-scroll-container') as HTMLElement;

    // Check if the element exists before adding scroll event listener
    if (horizontalScrollContainer) {
      // Handle vertical scroll to update horizontal scroll position
      const handleScroll = () => {
        const scrollY = window.scrollY; // Get the vertical scroll position
        const maxScroll = document.body.scrollHeight - window.innerHeight; // Maximum scrollable height

        // Calculate how much horizontal scroll should occur based on the vertical scroll position
        const scrollRatio = scrollY / maxScroll;

        // Apply horizontal scroll transformation
        horizontalScrollContainer.style.transform = `translateX(-${scrollRatio * (horizontalScrollContainer.scrollWidth - window.innerWidth)}px)`;
      };

      // Attach the scroll event listener
      window.addEventListener('scroll', handleScroll);

      // Cleanup the event listener when the component is unmounted
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="min-h-screen">
      {/* First Section (Vertical Scroll) */}
      <div className="section-1 h-screen flex items-center justify-center bg-gray-200">
        <h1 className="text-4xl font-bold text-gray-800">Scroll Down to Explore the Hybrid Scroll</h1>
      </div>

      {/* Divider */}
      <div className="separator h-20 bg-gray-500"></div>

      {/* Second Section (Hybrid Scroll) */}
      <div className="section-2 h-screen overflow-y-scroll">
        <div className="horizontal-scroll-container flex transition-transform duration-200">
          <img src="https://via.placeholder.com/1920x1080/ff7f7f/333333?text=Image+1" alt="Image 1" className="flex-shrink-0 w-screen h-screen object-cover" />
          <img src="https://via.placeholder.com/1920x1080/7fffd4/333333?text=Image+2" alt="Image 2" className="flex-shrink-0 w-screen h-screen object-cover" />
          <img src="https://via.placeholder.com/1920x1080/ff6347/333333?text=Image+3" alt="Image 3" className="flex-shrink-0 w-screen h-screen object-cover" />
          <img src="https://via.placeholder.com/1920x1080/8a2be2/333333?text=Image+4" alt="Image 4" className="flex-shrink-0 w-screen h-screen object-cover" />
          <img src="https://via.placeholder.com/1920x1080/ff4500/333333?text=Image+5" alt="Image 5" className="flex-shrink-0 w-screen h-screen object-cover" />
        </div>
      </div>
    </div>
  );
}
