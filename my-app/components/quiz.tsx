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
import Image from "next/image";

export default function Quiz() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState("start");

  const handleChoice = (nextQuestion: string) => {
    setCurrentQuestion(nextQuestion);
  };

  const currentQuizItem = quizInput[currentQuestion];

  useEffect(() => {
    if (currentQuestion === "bad_end") {
      router.push("/resources?result=badEnd");
    } else if (currentQuestion === "good_end") {
      router.push("/resources?result=goodEnd");
    }
  }, [currentQuestion, router]);

  return (
    <div>
      <Image
        src={currentQuizItem.image}
        alt="background pic"
        fill={true}
        className="-z-50 object-cover pointer-events-none"
      />
      <Card className="w-[500px] text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Choose Your Adventure</CardTitle>
          <CardDescription className="text-lg">
            Make your choices wisely
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-md">{currentQuizItem.question}</p>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-around m-2 space-y-2">
          {Object.entries(currentQuizItem.choices).map(
            ([choice, nextQuestion]) => (
              <Button
                key={choice}
                onClick={() => handleChoice(nextQuestion)}
                className="w-full px-8 py-4 text-white border text-md bg-black dark:bg-white dark:text-black"
              >
                {choice}
              </Button>
            )
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
