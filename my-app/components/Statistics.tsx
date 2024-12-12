import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Statistics() {
  return (
    <section className="bg-purple-50 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold dark:text-white">
            Impact of Drug Awareness
          </h2>
          <p className="mt-4 dark:text-gray-300">
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
    name: "Charles Dickens",
    value: "70%",
    description: "Recovery success rate with proper support"
  },
  {
    value:"24/7",
    description: "Support availability nationwide",
    name: "William Shakespeare",
  },
  {
    value:"1000+",
    description: "Support centers across the country",
    name: "Test",
  },
  
];

// const testimonials = [
//   {
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//   },
//   {
//     quote:
//       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     name: "William Shakespeare",
//     title: "Hamlet",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
// ];

// interface StatisticsProps {
//   value: string;
//   description: string;
// }

// function StatItem({ value, description }: StatisticsProps) {
//   return (
//     <div>
      // <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
      //   {value}
      // </div>
      // <p className="mt-2 text-muted-foreground dark:text-gray-300">
      //   {description}
      // </p>
//     </div>
//   );
// }
