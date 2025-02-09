"use client";
import { useGame } from "./GameProvider";
import { Grid } from "./Grid";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Popup from "../general/GameOverPopup";

// At the top of the file, add these colors
const GROUP_COLORS = [
  "bg-red-300",
  "bg-green-300",
  "bg-blue-300",
  "bg-purple-300",
];

export function GameBoard() {
  const router = useRouter();
  const {
    mistakes,
    submitGuess,
    selectedTiles,
    gameComplete,
    foundGroupsWithThemes,
    startNewGame,
  } = useGame();

  const isGameOver = mistakes >= 4;

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="mb-4 flex justify-between items-center">
        <span>Mistakes</span>
        <div className="flex gap-1">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < mistakes ? "bg-red-500" : "bg-gray-800"
              }`}
            />
          ))}
        </div>
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
                  className={`${GROUP_COLORS[index]
                    .replace("bg-", "bg-")
                    .replace("-300", "-200")} p-1 text-center rounded text-sm`}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Grid />

      {mistakes < 4 && !gameComplete && (
        <div className="mt-4 flex gap-2">
          <Button
            onClick={submitGuess}
            disabled={selectedTiles.length !== 4}
            variant="brutal_lime"
          >
            Submit
          </Button>
          <Button
            onClick={startNewGame}
            variant="brutal_green"
            className="w-1/2"
          >
            New Game
          </Button>
        </div>
      )}

      {(gameComplete || isGameOver) && (
        <Popup
          title="Chanz, the game is joe-ver."
          buttons={[
            {
              text: "Try again, pookie wookie?",
              onClick: startNewGame,
              className: "bg-yellow-400 hover:bg-yellow-500 text-black",
            },
            {
              text: "Ok enough, back to home",
              onClick: () => router.push("/"),
              className: "bg-blue-400 hover:bg-blue-500 text-black",
            },
          ]}
        />
      )}
    </div>
  );
}
