import Image from "next/image"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section className="px-4 py-20 bg-white dark:bg-gray-700 flex flex-row justify-between">
      <div className="container mx-36 w-[550px] flex flex-wrap">
        <h1 className="mb-6 text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl dark:text-white">
          About&nbsp;
          <span className="text-purple-600 dark:text-purple-400">
            Drug Abuse
          </span>
          &nbsp;In Singapore
        </h1>
        <p className="max-w-2xl font-semibold dark:text-gray-300">
          Drug abuse is a serious issue in Singapore, with methamphetamines,
          heroin, and cannabis being the most commonly abused substances.
        </p>
        <br />
        <p className="max-w-2xl text-muted-foreground dark:text-gray-300">
          The government enforces strict laws, including harsh penalties for
          trafficking and possession. In addition to legal measures, Singapore
          focuses on prevention through public education and offers
          rehabilitation services like the National Addiction Management
          Service (NAMS) to help individuals recover and reintegrate into
          society. Despite these efforts, drug abuse remains a challenge,
          particularly among younger individuals, requiring continued
          vigilance and intervention.
        </p>
        <Button
          size="lg"
          className="mt-8 font-semibold"
        >
          Get Support
        </Button>
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
  )
}
