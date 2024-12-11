"use client";

import React, { useState } from 'react';
import { gameFramework, GameState } from './decisions';

export default function Quiz() {
    const [currentStateKey, setCurrentStateKey] = useState<string>('start');
    const currentState: GameState = gameFramework[currentStateKey];

    const handleOptionClick = (nextStateKey: string) => {
        setCurrentStateKey(nextStateKey);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Interactive Game</h1>
            <p>{currentState.text}</p>
            <div>
                {Object.keys(currentState.options).map((optionKey) => (
                    <button
                        key={optionKey}
                        onClick={() => handleOptionClick(currentState.options[optionKey])}
                        style={{ margin: '5px' }}
                    >
                        {optionKey}
                    </button>
                ))}
            </div>
        </div>
    );
}