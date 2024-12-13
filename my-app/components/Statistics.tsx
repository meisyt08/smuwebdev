import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Statistics() {
  return (
    <section className="bg-purple-50 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl dark:text-white">
            <span className="text-purple-600 dark:text-purple-400">Impact</span>
            &nbsp;of Drug Awareness
          </h2>
          <p className="mt-2 text-muted-foreground dark:text-gray-300">
            Statistics about Drug Abuse In Singapore.
          </p>
        </div>

        <div className="rounded-md flex flex-col antialiased items-center justify-center relative">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    value: "20+",
    description:
      "drug syndicates were smashed by CNB in 2023, leading to the arrest of many traffickers.",
    id: 1,
  },
  {
    value: "S$15.58m",
    description:
      "worth of drugs were estimated to have been seized by the CNB.",
    id: 2,
  },
  {
    value: "3,122",
    description: "drug abusers were arrested by CNB in 2023.",
    id: 3,
  },
  {
    value: "19%",
    description:
      "increase in arrest of new abusers, from 802 in 2022 to 952 in 2023.",
    id: 4,
  },
];
