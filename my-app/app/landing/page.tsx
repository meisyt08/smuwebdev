import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { InfoCards } from "@/components/InfoCards";
import { Statistics } from "@/components/Statistics";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <Hero />
      <div id="about">
        <About />
      </div>
      <InfoCards />
      <Statistics />
      <Footer />
    </div>
  );
}
