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
    <div className="px-4">
      <Image
        src="/1.png"
        alt="background pic"
        fill={true}
        className="-z-50 object-cover pointer-events-none"
      />
      <h1>Interactive Game</h1>
      <p>{currentState.text}</p>
      <div>
        {Object.keys(currentState.options).map((optionKey) => (
          <button
            key={optionKey}
            onClick={() => handleOptionClick(currentState.options[optionKey])}
            style={{ margin: "5px" }}
          >
            {optionKey}
          </button>
        ))}
      </div>
    </div>
  );
}
