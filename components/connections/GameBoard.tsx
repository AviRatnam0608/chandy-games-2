"use client";

import { useGame } from "./GameProvider";
import { Grid } from "./Grid";
import { Button } from "@/components/ui/button";

// At the top of the file, add these colors
const GROUP_COLORS = [
  "bg-yellow-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-purple-200",
];

export function GameBoard() {
  const {
    mistakes,
    submitGuess,
    selectedTiles,
    gameComplete,
    foundGroupsWithThemes,
  } = useGame();

  const randomPastelColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  console.log(randomPastelColor);

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="mb-4 flex justify-between items-center">
        <div>Mistakes: {mistakes}/4</div>
        {gameComplete && <div>Game Complete!</div>}
      </div>

      {/* Display found groups with themes */}
      <div className="mb-4">
        {foundGroupsWithThemes.map((group, index) => (
          <div
            key={index}
            className={`mb-2 p-2 ${GROUP_COLORS[index]} rounded`}
          >
            <div className="font-bold text-sm mb-1">{group.theme}</div>
            <div className="grid grid-cols-4 gap-1">
              {group.words.map((word, wordIndex) => (
                <div
                  key={wordIndex}
                  className={`${GROUP_COLORS[index].replace(
                    "200",
                    "100"
                  )} p-1 text-center rounded text-sm`}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Grid />

      <Button
        onClick={submitGuess}
        disabled={selectedTiles.length !== 4}
        className="w-full mt-4"
      >
        Submit
      </Button>
    </div>
  );
}
