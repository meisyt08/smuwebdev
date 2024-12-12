import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Users, Phone } from 'lucide-react'
import { ReactNode } from "react";

export function InfoCards() {
  return (
    <section className="container mx-auto px-4 py-12 mb-4">
      <div className="text-center mb-6 ">
        <h1 className="mx-auto max-w-lg text-xl font-bold tracking-tight sm:text-2xl md:text-3xl dark:text-white">
          How Can You&nbsp;
          <span className="text-purple-600 dark:text-purple-400">
            Help Someone
          </span>
          &nbsp;Battling With Drug Abuse?
        </h1>
        <p className="mt-2 text-muted-foreground dark:text-gray-300">
          There are many ways to show your support to someone struggling with
          drug abuse.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <InfoCard
          icon={<AlertTriangle className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />}
          title="Warning Signs"
          description="Notice if they use drugs or alcohol as a coping mechanism. Observe if they consume substances in increasing amounts or over extended periods."
        />
        <InfoCard
          icon={<Users className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />}
          title="Support Network"
          description="Connect with counselors and support groups in your area. Educate yourself about addiction to understand their struggles better and provide informed support."
        />
        <InfoCard
          icon={<Phone className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400" />}
          title="24/7 Helpline"
          description="Encourage them to seek professional help through dedicated helplines, ensuring support is available anytime they need it most."
        />
      </div>
    </section>
  )
}

interface InfoCardProps {
    icon: ReactNode;
    title: string;
    description: string;
  }
  
function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <Card className="dark:bg-gray-700">
      <CardContent className="flex flex-col items-center p-6 text-center">
        {icon}
        <h3 className="mb-2 text-xl font-semibold dark:text-white">{title}</h3>
        <p className="text-muted-foreground dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}
