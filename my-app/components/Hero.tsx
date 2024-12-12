import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
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
        <Button asChild size="lg" className="font-semibold">
          <Link href="/resources">Get Support</Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant={"secondary"}
          className="font-semibold border"
        >
          <Link href="#about">About Drug Abuse</Link>
        </Button>
      </div>
    </section>
  );
}
