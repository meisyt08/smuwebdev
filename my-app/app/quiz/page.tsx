"use client";

import React, { useState } from "react";
import Image from "next/image";
import { gameFramework, GameState } from "./decisions";

export default function Quiz() {
  const [currentStateKey, setCurrentStateKey] = useState<string>("start");
  const currentState: GameState = gameFramework[currentStateKey];

  const handleOptionClick = (nextStateKey: string) => {
    setCurrentStateKey(nextStateKey);
  };

  return (
    <div className="w-screen h-[90vh] flex justify-center items-center">
      <div className="px-4">
        <Image
          src="/1.png"
          alt="background pic"
          fill={true}
          className="-z-50 object-cover pointer-events-none"
        />
        <div className="text-white text-center">
          <h1 className="mb-4 text-2xl max-w-3xl">{currentState.text}</h1>
          <div className="text-3xl">
            {Object.keys(currentState.options).map((optionKey) => (
              <button
                key={optionKey}
                onClick={() =>
                  handleOptionClick(currentState.options[optionKey])
                }
                className="mt-2 px-6"
              >
                {optionKey}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
