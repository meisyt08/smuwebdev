"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const AnimatedTestimonials = dynamic(
  () =>
    import("@/components/ui/animated-testimonials").then(
      (mod) => mod.AnimatedTestimonials
    ),
  {
    loading: () => <div>Loading testimonials...</div>,
    ssr: false,
  }
);

export default function AboutUs() {
  const content = [
    {
      title: "Jayden",
      subheader: "Absolute Beast of a Gamer",
      description: '"I don\'t know. Play Moomoo.io."',
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/jayden.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Yu Ting",
      subheader: "Professional TTS Generator, Part-time Yapper/Innovator",
      description: '"My favourite hobby\'s prolly getting rich."',
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/yuting.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Javen",
      subheader: "Pitbull Lover / Pitbull's Lover",
      description:
        '"Ask for money, get advice. Ask for advice, get money twice."',
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/javen.jpeg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Ivyn",
      subheader: "What The Cup Fan",
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/ivyn.jpeg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 ">
      <main className="container mx-auto px-20 py-8">
        <section id="mission" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
            Our Mission
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                We are dedicated to educating individuals about the dangers of
                drug addiction and providing support for those affected. Our
                goal is to empower people with knowledge and resources to
                overcome addiction and lead healthier lives.
              </p>
              <p className="text-lg">
                Through awareness, education, and community support, we believe
                that together we can make a difference in the fight against drug
                addiction.
              </p>
            </div>
            <div className="md:w-1/2 ml-8">
              {" "}
              {/* Add ml-8 here to move the image right */}
              <Image
                src="/newguy.png"
                alt="People supporting each other"
                width={400}
                height={300}
              />
            </div>
          </div>
        </section>

        <section id="understand" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
            Understanding Addiction
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white dark:bg-gray-600">
              <CardHeader>
                <CardTitle>The Science of Addiction</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Addiction is a complex brain disorder that affects the reward
                  system, leading to compulsive drug use despite harmful
                  consequences.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-600">
              <CardHeader>
                <CardTitle>Risk Factors</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Genetic predisposition, environmental factors, mental health
                  issues, and early drug use can increase the risk of addiction.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-600">
              <CardHeader>
                <CardTitle>Signs of Addiction</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Changes in behavior, neglecting responsibilities, physical
                  health decline, and inability to stop using are common signs
                  of addiction.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-600">
              <CardHeader>
                <CardTitle>Long-term Effects</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Chronic drug use can lead to severe health problems, strained
                  relationships, financial difficulties, and legal issues.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="help" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4  text-purple-600 dark:text-purple-400">
            Support and Resources
          </h2>
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
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Find Help Near You
              </Button>
            </div>
          </div>
        </section>
        <section id="about" className="mb-12">
          <div className="flex flex-col md:flex-col gap-8">
            <h2 className="text-2xl text-center font-semibold mb-4 text-purple-600 dark:text-purple-400">
              Who are we?
            </h2>
            <StickyScroll content={content} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
