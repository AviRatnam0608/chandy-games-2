"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { getRandomPuzzle } from "@/lib/connections/data";

interface Group {
  words: string[];
  theme: string;
}

interface Puzzle {
  groups: Group[];
  words: string[];
}

interface GameContextType {
  words: string[];
  selectedTiles: number[];
  foundGroups: string[][];
  foundGroupsWithThemes: { words: string[]; theme: string }[];
  mistakes: number;
  toggleTile: (index: number) => void;
  submitGuess: () => void;
  gameComplete: boolean;
  startNewGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [puzzle, setPuzzle] = useState(() => {
    const selectedPuzzle = getRandomPuzzle();
    // Shuffle the words array
    const shuffledWords = [...selectedPuzzle.words].sort(
      () => Math.random() - 0.5
    );
    return { ...selectedPuzzle, words: shuffledWords };
  });

  const [selectedTiles, setSelectedTiles] = useState<number[]>([]);
  const [foundGroupsWithThemes, setFoundGroupsWithThemes] = useState<Group[]>(
    []
  );
  const [mistakes, setMistakes] = useState(0);

  const toggleTile = (index: number) => {
    setSelectedTiles((current) => {
      if (current.includes(index)) {
        return current.filter((i) => i !== index);
      }
      if (current.length < 4) {
        return [...current, index];
      }
      return current;
    });
  };

  const submitGuess = () => {
    if (selectedTiles.length !== 4) return;

    const selectedWords = selectedTiles.map((index) => puzzle.words[index]);
    const matchedGroup = puzzle.groups.find(
      (group) =>
        group.words.every((word) => selectedWords.includes(word)) &&
        selectedWords.every((word) => group.words.includes(word))
    );

    if (matchedGroup) {
      setFoundGroupsWithThemes((current) => [...current, matchedGroup]);

      // Remove found words from the main grid and move them to top
      const newWords = [...puzzle.words];
      selectedTiles
        .sort((a, b) => b - a)
        .forEach((index) => {
          newWords.splice(index, 1);
        });
      setPuzzle((prev) => ({
        ...prev,
        words: [...selectedWords, ...newWords],
      }));

      setSelectedTiles([]);
    } else {
      setMistakes((m) => m + 1);
      setSelectedTiles([]);
    }
  };

  const gameComplete = foundGroupsWithThemes.length === puzzle.groups.length;

  const startNewGame = () => {
    setPuzzle(getRandomPuzzle());
    setFoundGroupsWithThemes([]);
    setMistakes(0);
    setSelectedTiles([]);
  };

  return (
    <GameContext.Provider
      value={{
        words: puzzle.words,
        selectedTiles,
        foundGroups: foundGroupsWithThemes.map((group) => group.words),
        foundGroupsWithThemes,
        mistakes,
        toggleTile,
        submitGuess,
        gameComplete,
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
