"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { quizInput } from "../app/quiz/quizInput";
import { useRouter } from "next/navigation";

export default function Quiz() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState("start");

  const handleChoice = (nextQuestion: string) => {
    setCurrentQuestion(nextQuestion);
  };

  const currentQuizItem = quizInput[currentQuestion];

  useEffect(() => {
    if (currentQuestion === "end_suspicious" || currentQuestion === "end_arrested") {
      router.push("/resources?result=badEnd");
    } else if (currentQuestion === "end_confess" || currentQuestion === "end_help" || currentQuestion === "end_confront") {
      router.push("/resources?result=goodEnd");
    }
  }, [currentQuestion, router]);

  return (
    <Card className="w-[450px] text-center">
      <CardHeader>
        <CardTitle className="text-2xl">Choose Your Adventure</CardTitle>
        <CardDescription className="text-md">Make your choices wisely</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-md">{currentQuizItem.question}</p>
      </CardContent>
      <CardFooter className="flex flex-row justify-around mt-2">
        {Object.entries(currentQuizItem.choices).map(
          ([choice, nextQuestion]) => (
            <Button
              key={choice}
              onClick={() => handleChoice(nextQuestion)}
              className="px-8 py-4 rounded-2xl text-white border bg-black dark:bg-white dark:text-black"
            >
              {choice}
            </Button>
          )
        )}
      </CardFooter>
    </Card>
  );
}
