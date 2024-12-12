import { Button } from "@/components/ui/button"

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
  )
}