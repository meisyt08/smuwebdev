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


// export default function Home() {
//   useEffect(() => {
//     // Cast the result to HTMLElement explicitly
//     const horizontalScrollContainer = document.querySelector('.horizontal-scroll-container') as HTMLElement;
//     const section2 = document.querySelector('.section-2') as HTMLElement;

//     let isInView = false; // This will track if the section is in the viewport

//     // Check if the element exists before adding scroll event listener
//     if (horizontalScrollContainer && section2) {
//       // Create an IntersectionObserver to detect when section-2 enters the viewport
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             // If the section is in view, allow horizontal scroll effect
//             isInView = true;
//           } else {
//             // If the section is out of view, disable horizontal scroll effect
//             isInView = false;
//             horizontalScrollContainer.style.transform = 'translateX(0)'; // Reset horizontal scroll position
//           }
//         },
//         { threshold: 0.5 } // Trigger when 50% of the section is in view
//       );

//       // Start observing the section-2
//       observer.observe(section2);

//       // Handle vertical scroll to update horizontal scroll position
//       const handleScroll = () => {
//         if (!isInView) return; // Only trigger scroll-based horizontal movement when the section is in view

//         const scrollY = window.scrollY; // Get the vertical scroll position
//         const maxScroll = document.body.scrollHeight - window.innerHeight; // Maximum scrollable height

//         // Calculate how much horizontal scroll should occur based on the vertical scroll position
//         const scrollRatio = scrollY / maxScroll;

//         // Apply horizontal scroll transformation
//         horizontalScrollContainer.style.transform = `translateX(-${scrollRatio * (horizontalScrollContainer.scrollWidth - window.innerWidth)}px)`;
//       };

//       // Attach the scroll event listener
//       window.addEventListener('scroll', handleScroll);

//       // Cleanup the event listener when the component is unmounted
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//         observer.disconnect(); // Stop observing when the component is unmounted
//       };
//     }
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   return (
//     <div className="min-h-screen">
//       {/* First Section (Vertical Scroll) */}
//       <div className="section-1 h-screen flex items-center justify-center bg-gray-200">
//         <h1 className="text-4xl font-bold text-gray-800">Words</h1>
//       </div>

//       {/* Divider */}
//       <div className="separator h-20 bg-gray-500"></div>

//       {/* Second Section (Hybrid Scroll) */}
//       <div className="section-2 h-screen overflow-hidden">
//         <div className="horizontal-scroll-container flex transition-transform duration-200 overflow-x-hidden">
//           <img src="ivyn.jpeg" alt="Image 1" className="flex-shrink-0 w-screen h-screen object-cover" />
//           <img src="javen.jpeg" alt="Image 2" className="flex-shrink-0 w-screen h-screen object-cover" />
//           <img src="Jayden.jpg" alt="Image 3" className="flex-shrink-0 w-screen h-screen object-cover" />
//           <img src="yuting.jpg" alt="Image 4" className="flex-shrink-0 w-screen h-screen object-cover" />
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.section-2');

      // Check if the section element is found (not null)
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="vertical-scroll">
        {/* Section 1 */}
        <div className="section section-1">
          <h1>Section 1: Vertical Scroll</h1>
          <p>Keep scrolling down to explore more!</p>
        </div>

        {/* Horizontal Scroll with Images */}
        <div className="horizontal-scroll">
          <div className="scroll-item width ">
            <img src="jayden.jpg" alt="Jayden" />
          </div>
          <div className="scroll-item">
            <img src="yuting.jpg" alt="Yu Ting" />
          </div>
          <div className="scroll-item">
            <img src="ivyn.jpeg" alt="Ivyn" />
          </div>
          <div className="scroll-item">
            <img src="javen.jpeg" alt="Javen" />
          </div>
          
        </div>

        {/* Section 2 with Scroll-triggered Animation */}
        <div className={`section section-2 ${isInView ? 'animate' : ''}`}>
          <h1>Section 2: Scroll-triggered Animation</h1>
          <p>Watch the background color change when you scroll!</p>
        </div>

        {/* Section 3 */}
        <div className="section section-3">
          <h1>Section 3: Vertical Scroll</h1>
          <p>Keep scrolling for more!</p>
        </div>
      </div>
    </div>
  );
};

export default App;

