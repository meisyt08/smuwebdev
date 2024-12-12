import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Phone, AlertTriangle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl dark:text-white">
          Take Control of Your Life
          <span className="block text-purple-600 dark:text-purple-400">
            Stay Drug-Free
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-muted-foreground dark:text-gray-300">
          Understanding drug abuse is the first step toward prevention and
          recovery. Get informed, seek help, and support others in their journey
          to a healthier life.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-black text-white dark:bg-white dark:text-black font-semibold"
          >
            Get Support
          </Button>
          <Button
            size="lg"
            className="bg-white text-black border dark:bg-black dark:text-white font-semibold"
          >
            About Drug Abuse
          </Button>
        </div>
      </section>

      <section className=" px-4 py-20 bg-white flex flex-row justify-between">
        <div className="container mx-36 w-[550px] flex flex-wrap">
          <h1 className="mb-6 text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl dark:text-white">
            About&nbsp;
            <span className="text-purple-600 dark:text-purple-400">
              Drug Abuse
            </span>
            &nbsp;In Singapore
          </h1>
          <p className=" max-w-2xl font-semibold dark:text-gray-300">
            Drug abuse is a serious issue in Singapore, with methamphetamines,
            heroin, and cannabis being the most commonly abused substances.
          </p>
          <br />
          <p className=" max-w-2xl text-muted-foreground dark:text-gray-300">
            The government enforces strict laws, including harsh penalties for
            trafficking and possession. In addition to legal measures, Singapore
            focuses on prevention through public education and offers
            rehabilitation services like the National Addiction Management
            Service (NAMS) to help individuals recover and reintegrate into
            society. Despite these efforts, drug abuse remains a challenge,
            particularly among younger individuals, requiring continued
            vigilance and intervention.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center mx-auto w-[350px] h-[350px]">
          <Image
            src="/pills.webp"
            alt="background pic"
            width={350}
            height={350}
            className="z-50 object-cover pointer-events-none"
          />
        </div>
      </section>

      {/* Info Cards */}
      <section className="container mx-auto px-4 py-12 mb-4">
        <div className="text-center">
          <h1 className="mb-6 text-xl font-bold tracking-tight sm:text-2xl md:text-3xl dark:text-white">
            How Can You&nbsp;
            <span className="text-purple-600 dark:text-purple-400">Help?</span>
          </h1>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="dark:bg-gray-700">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <AlertTriangle className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />
              <h3 className="mb-2 text-xl font-semibold dark:text-white">
                Warning Signs
              </h3>
              <p className="text-muted-foreground dark:text-gray-300">
                Learn to recognize the early signs of drug abuse and addiction.
              </p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-700">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Users className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />
              <h3 className="mb-2 text-xl font-semibold dark:text-white">
                Support Network
              </h3>
              <p className="text-muted-foreground dark:text-gray-300">
                Connect with counselors and support groups in your area.
              </p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-700">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Phone className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />
              <h3 className="mb-2 text-xl font-semibold dark:text-white">
                24/7 Helpline
              </h3>
              <p className="text-muted-foreground dark:text-gray-300">
                Professional help is always available when you need it most.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-purple-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold dark:text-white">
            Impact of Drug Awareness
          </h2>
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div>
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                70%
              </div>
              <p className="mt-2 text-muted-foreground dark:text-gray-300">
                Recovery success rate with proper support
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                24/7
              </div>
              <p className="mt-2 text-muted-foreground dark:text-gray-300">
                Support availability nationwide
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                1000+
              </div>
              <p className="mt-2 text-muted-foreground dark:text-gray-300">
                Support centers across the country
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 py-12 text-gray-300">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Emergency
              </h3>
              <p className="text-2xl font-bold text-purple-400">
                1-800-123-4567
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:text-purple-400" href="#">
                    Find Help
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-purple-400" href="#">
                    Prevention Guide
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-purple-400" href="#">
                    Support Groups
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Information
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:text-purple-400" href="#">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-purple-400" href="#">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-purple-400" href="#">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Newsletter
              </h3>
              <p className="mb-4">
                Stay updated with our latest resources and support information.
              </p>
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2024 DrugAware. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
