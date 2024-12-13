"use client";

import Quiz from "@/components/quiz";

export default function QuizPage() {
  return (
    <main className="flex items-center justify-center p-24 mt-20">
      <Quiz />
      <audio autoPlay loop>
        <source src="/groves-small.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </main>
  );
}
