"use client";

import Quiz from "@/components/quiz";
import { useEffect, useRef } from "react";

export default function QuizPage() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <main className="flex items-center justify-center p-24 mt-20">
      <Quiz />
      <audio ref={audioRef} autoPlay loop>
        <source src="/groves-small.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </main>
  );
}
