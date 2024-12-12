"use client";

import Quiz from '@/components/quiz'
import Image from "next/image";

export default function QuizPage() {
  return (
    <main className="flex items-center justify-center p-24 mt-20">
      <Image
          src="/1.png"
          alt="background pic"
          fill={true}
          className="-z-50 object-cover pointer-events-none"
        />
      <Quiz />
    </main>
  )
}
