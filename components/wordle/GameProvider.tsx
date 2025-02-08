"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { getRandomWord, isValidWord } from "../../lib/wordle/words";

interface GameContextType {
  guesses: string[];
  currentGuess: string;
  solution: {
    word: string;
    hint: string;
  };
  gameStatus: "playing" | "won" | "lost";
  addGuess: (guess: string) => void;
  updateCurrentGuess: (letter: string) => void;
  deleteLetter: () => void;
  startNewGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [solution] = useState(() => getRandomWord());
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">(
    "playing"
  );

  const addGuess = (guess: string) => {
    if (gameStatus !== "playing") return;

    if (guess.length !== 5) {
      return;
    }

    if (!isValidWord(guess)) {
      return;
    }

    const newGuesses = [...guesses, guess.toLowerCase()];
    setGuesses(newGuesses);
    setCurrentGuess("");

    if (guess.toLowerCase() === solution.word.toLowerCase()) {
      setGameStatus("won");
    } else if (newGuesses.length === 6) {
      setGameStatus("lost");
    }
  };

  const updateCurrentGuess = (letter: string) => {
    if (gameStatus !== "playing") return;
    if (currentGuess.length < 5) {
      setCurrentGuess((current) => current + letter);
    }
  };

  const deleteLetter = () => {
    if (gameStatus !== "playing") return;
    setCurrentGuess((current) => current.slice(0, -1));
  };

  const startNewGame = () => {
    setGuesses([]);
    setCurrentGuess("");
    setGameStatus("playing");
  };

  return (
    <GameContext.Provider
      value={{
        guesses,
        currentGuess,
        solution,
        gameStatus,
        addGuess,
        updateCurrentGuess,
        deleteLetter,
        startNewGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}
