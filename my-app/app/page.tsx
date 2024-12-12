"use client";
import dynamic from 'next/dynamic';
import { Testimonial } from "@/components/ui/animated-testimonials";

// Dynamically import the AnimatedTestimonials component
const AnimatedTestimonials = dynamic(
  () => import('@/components/ui/animated-testimonials').then(mod => mod.AnimatedTestimonials),
  {
    loading: () => <div>Loading testimonials...</div>, // Optional loading indicator
    ssr: false, // Disable server-side rendering for this component
  }
);

export default function AboutMe() {
  const testimonials: Testimonial[] = [
    {
      quote: "I don't know. Play Moomoo.io.",
      name: "Jayden",
      designation: "Absolute Beast of a Gamer",
      src: "/jayden.jpg",
    },
    {
      quote: "My favourite hobby's prolly getting rich.",
      name: "Yu Ting",
      designation: "Professional TTS Generator, Part-time Yapper/Innovator",
      src: "/yuting.jpg",
    },
    {
      quote: "Ask for money, get advice. Ask for advice, get money twice.",
      name: "Javen",
      designation: "Pitbull Lover / Pitbull's Lover",
      src: "/javen.jpeg",
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Ivyn",
      designation: "What The Cup Fan",
      src: "/ivyn.jpeg",
    },
  ];

  return (
    <div className="mt-0"> {/* Adjusted to 0 for no margin on top */}
      
      {/* Section: About the website */}
      <div className="h-10 bg-inherit"></div>

      {/* Flex container for text and image, using ml-auto to push content to the right */}
      <div className="flex flex-col lg:flex-row items-center justify-start lg:ml-auto px-4 space-x-8"> {/* Using lg:ml-auto to push items right on large screens */}
        
        {/* Left-aligned text */}
        <div className="min-h-screen flex flex-col justify-start items-start bg-inherit text-left py-10 max-w-3xl">
          <h2 className="text-3xl font-semibold text-black">
            What does our website do?
          </h2>
          <p className="mt-4 text-lg text-black">
            This website helps users recognize the signs of drug addiction and provides essential resources for support. It offers guidance on identifying addiction symptoms, accessing treatment, and navigating the recovery process. By empowering both individuals struggling with addiction and their loved ones, it provides tools like self-assessments, coping strategies, and access to support networks. The site works to reduce stigma, normalize the conversation around addiction, and provide a confidential space for those seeking help. Ultimately, it serves as a vital resource for early intervention, recovery, and ongoing emotional support.
          </p>
        </div>

        {/* Image (now aligned to the top) */}
        <img 
          src="newguy.png" 
          alt="Thinking guy"
          className="h-[350px] w-[350px] object-contain self-start" // Set exact image size (350px)
        />
      </div>

      {/* Section: Who are we? */}
      <div className="flex flex-col justify-center items-center bg-inherit text-center mb-0 py-4">
        <h2 className="text-3xl font-semibold text-black">
          Who are we?
        </h2>
      </div>

      {/* Animated testimonials component */}
      <AnimatedTestimonials testimonials={testimonials} />

      <div className="h-20 bg-inherit"></div>
    </div>
  );
}
