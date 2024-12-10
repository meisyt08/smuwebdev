import dynamic from 'next/dynamic';
import { Testimonial } from "@/components/ui/animated-testimonials";

const AnimatedTestimonials = dynamic(
  () => import('@/components/ui/animated-testimonials').then((mod) => mod.AnimatedTestimonials),
  {
    loading: () => <p>Loading testimonials...</p>, 
    ssr: false, 
  }
);

export default function AboutMe() {
  const testimonials: Testimonial[] = [
    {
      quote: "I don't know. Play Moomoo.io.",
      name: "Jayden",
      designation: "Absolute Beast of a Gamer",
      src: "/1.png",
    },
    {
      quote: "When life gives you lemons, make lemonade.",
      name: "Yu Ting",
      designation: "God Tier Coder",
      src: "/yuting.png",
    },
    {
      quote: "Ask for money, get advice. Ask for advice, get money twice.",
      name: "Javen",
      designation: "Pitbull Lover/ Pitbull's Lover",
      src: "/javen.jpeg",
    },
    {
      quote: "Blah blah blah",
      name: "Ivyn",
      designation: "Blah blah",
      src: "/1.png",
    },
  ];
  return (
    <div className="mt-4">
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
