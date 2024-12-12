export function Statistics() {
  return (
    <section className="bg-purple-50 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold dark:text-white">
          Impact of Drug Awareness
        </h2>
        <div className="grid gap-8 text-center md:grid-cols-3">
          <StatItem
            value="70%"
            description="Recovery success rate with proper support"
          />
          <StatItem
            value="24/7"
            description="Support availability nationwide"
          />
          <StatItem
            value="1000+"
            description="Support centers across the country"
          />
        </div>
      </div>
    </section>
  );
}

interface StatisticsProps {
  value: string;
  description: string;
}

function StatItem({ value, description }: StatisticsProps) {
  return (
    <div>
      <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
        {value}
      </div>
      <p className="mt-2 text-muted-foreground dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}
