"use client";

import { Tile } from "./Tile";
import { useGame } from "./GameProvider";

export function Grid() {
  const { words, selectedTiles, foundGroups, toggleTile } = useGame();

  const isFound = (word: string) => {
    return foundGroups.some((group) => group.includes(word));
  };

  return (
    <div className="grid grid-cols-4 gap-2">
      {words.map((word, index) => (
        <Tile
          key={index}
          word={word}
          selected={selectedTiles.includes(index)}
          found={isFound(word)}
          onClick={() => !isFound(word) && toggleTile(index)}
        />
      ))}
    </div>
  );
}
