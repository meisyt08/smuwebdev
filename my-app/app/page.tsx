"use client";
import dynamic from 'next/dynamic';
import { Testimonial } from "@/components/ui/animated-testimonials";
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const AnimatedTestimonials = dynamic(
  () => import('@/components/ui/animated-testimonials').then(mod => mod.AnimatedTestimonials),
  {
    loading: () => <div>Loading testimonials...</div>,
    ssr: false,
  }
);

export default function AboutUs() {
  const testimonials = [
    {
      quote: '"I don\'t know. Play Moomoo.io."',
      name: "Jayden",
      designation: "Absolute Beast of a Gamer",
      src: "/jayden.jpg",
    },
    {
      quote: '"My favourite hobby\'s prolly getting rich."',
      name: "Yu Ting",
      designation: "Professional TTS Generator, Part-time Yapper/Innovator",
      src: "/yuting.jpg",
    },
    {
      quote: '"Ask for money, get advice. Ask for advice, get money twice."',
      name: "Javen",
      designation: "Pitbull Lover / Pitbull's Lover",
      src: "/javen.jpeg",
    },
    {
      quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
      name: "Ivyn",
      designation: "What The Cup Fan",
      src: "/ivyn.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-200">
      {/* <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-purple-600">Drug Addiction Awareness</h1>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Our Mission</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                We are dedicated to educating individuals about the dangers of drug addiction and providing support for those affected. Our goal is to empower people with knowledge and resources to overcome addiction and lead healthier lives.
              </p>
              <p className="text-lg">
                Through awareness, education, and community support, we believe that together we can make a difference in the fight against drug addiction.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/newguy.png"
                alt="People supporting each other"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Understanding Addiction</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>The Science of Addiction</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Addiction is a complex brain disorder that affects the reward system, leading to compulsive drug use despite harmful consequences.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Risk Factors</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Genetic predisposition, environmental factors, mental health issues, and early drug use can increase the risk of addiction.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Signs of Addiction</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Changes in behavior, neglecting responsibilities, physical health decline, and inability to stop using are common signs of addiction.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Long-term Effects</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Chronic drug use can lead to severe health problems, strained relationships, financial difficulties, and legal issues.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Support and Resources</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/jayden.jpg"
                alt="Support group meeting"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-2">Available Help</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Professional addiction treatment centers</li>
                <li>Support groups (e.g., NA, AA)</li>
                <li>Counseling and therapy</li>
                <li>Medication-assisted treatment</li>
                <li>Helplines and online resources</li>
              </ul>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Find Help Near You</Button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">How You Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Educate Yourself</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about addiction, its causes, and effects to better understand and support those affected.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Offer Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Be there for friends or family members struggling with addiction. Encourage them to seek professional help.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Spread Awareness</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Share information about addiction and recovery resources with your community to help reduce stigma.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* <section className='mb-12'>
          <h2 className="text-2xl font-semibold mb-4 text-purple-800 text-center"></h2>
        </section> */}

        {/* <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">What does our website do?</h2>
          <div className="flex flex-col lg:flex-row items-center justify-start lg:ml-auto px-4 space-x-8">
            <div className="min-h-screen flex flex-col justify-start items-start bg-inherit text-left py-10 max-w-3xl">
              <p className="mt-4 text-lg text-black dark:text-gray-300">
                This website helps users recognize the signs of drug addiction and provides essential resources for support. It offers guidance on identifying addiction symptoms, accessing treatment, and navigating the recovery process. By empowering both individuals struggling with addiction and their loved ones, it provides tools like self-assessments, coping strategies, and access to support networks. The site works to reduce stigma, normalize the conversation around addiction, and provide a confidential space for those seeking help. Ultimately, it serves as a vital resource for early intervention, recovery, and ongoing emotional support.
              </p>
            </div>
            <img 
              src="newguy.png" 
              alt="Thinking guy"
              className="h-[350px] w-[350px] object-contain self-start"
            />
          </div>
        </section> */}

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800 text-center">Who are we?</h2>
          <AnimatedTestimonials testimonials={testimonials} />
        </section>
      </main>

      <footer className="bg-purple-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Drug Addiction Awareness. All rights reserved.</p>
          <p className="mt-2">If you or someone you know is struggling with addiction, please seek help.</p>
          <p className="font-bold mt-2">Emergency Helpline: 1-800-123-4567</p>
        </div>
      </footer>
    </div>
  )
}



// Dynamically import the AnimatedTestimonials component
// const AnimatedTestimonials = dynamic(
//   () => import('@/components/ui/animated-testimonials').then(mod => mod.AnimatedTestimonials),
//   {
//     loading: () => <div>Loading testimonials...</div>, // Optional loading indicator
//     ssr: false, // Disable server-side rendering for this component
//   }
// );

// export default function AboutMe() {
//   const testimonials: Testimonial[] = [
//     {
//       quote: '"I don\'t know. Play Moomoo.io."',
//       name: "Jayden",
//       designation: "Absolute Beast of a Gamer",
//       src: "/jayden.jpg",
//     },
//     {
//       quote: '"My favourite hobby\'s prolly getting rich."',
//       name: "Yu Ting",
//       designation: "Professional TTS Generator, Part-time Yapper/Innovator",
//       src: "/yuting.jpg",
//     },
//     {
//       quote: '"Ask for money, get advice. Ask for advice, get money twice."',
//       name: "Javen",
//       designation: "Pitbull Lover / Pitbull's Lover",
//       src: "/javen.jpeg",
//     },
//     {
//       quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
//       name: "Ivyn",
//       designation: "What The Cup Fan",
//       src: "/ivyn.jpeg",
//     },
//   ];

//   return (
//     <div className="mt-0"> {/* Adjusted to 0 for no margin on top */}
      
//       {/* Section: About the website */}
//       <div className="h-10 bg-inherit"></div>

//       {/* Flex container for text and image, using ml-auto to push content to the right */}
//       <div className="flex flex-col lg:flex-row items-center justify-start lg:ml-auto px-4 space-x-8"> {/* Using lg:ml-auto to push items right on large screens */}
        
//         {/* Left-aligned text */}
//         <div className="min-h-screen flex flex-col justify-start items-start bg-inherit text-left py-10 max-w-3xl">
//           <h2 className="text-3xl font-semibold text-black  dark:text-white">
//             What does our website do?
//           </h2>
//           <p className="mt-4 text-lg text-black  dark:text-gray-300">
//             This website helps users recognize the signs of drug addiction and provides essential resources for support. It offers guidance on identifying addiction symptoms, accessing treatment, and navigating the recovery process. By empowering both individuals struggling with addiction and their loved ones, it provides tools like self-assessments, coping strategies, and access to support networks. The site works to reduce stigma, normalize the conversation around addiction, and provide a confidential space for those seeking help. Ultimately, it serves as a vital resource for early intervention, recovery, and ongoing emotional support.
//           </p>
//         </div>

//         {/* Image (now aligned to the top) */}
//         <img 
//           src="newguy.png" 
//           alt="Thinking guy"
//           className="h-[350px] w-[350px] object-contain self-start" // Set exact image size (350px)
//         />
//       </div>

//       {/* Section: Who are we? */}
//       <div className="flex flex-col justify-center items-center bg-inherit text-center mb-0 py-4">
//         <h2 className="text-3xl font-semibold text-black dark:text-white">
//           Who are we?
//         </h2>
//       </div>

//       {/* Animated testimonials component */}
//       <AnimatedTestimonials testimonials={testimonials} />

//       <div className="h-20 bg-inherit"></div>
//     </div>
//   );
// }
