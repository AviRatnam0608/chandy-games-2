"use client";
import { useGame } from "@/components/wordle/GameProvider";
import { useRouter } from "next/navigation";
import Popup from "../general/GameOverPopup";

export default function GameBoard() {
  const { guesses, currentGuess, solution } = useGame();
  const emptyRows = Array(6 - guesses.length).fill("");
  const router = useRouter();
  const getLetterStatus = (letter: string, position: number, word: string) => {
    if (solution[position] === letter) return "correct";
    if (solution.includes(letter)) return "present";
    return "absent";
  };

  const gameComplete = guesses.some((guess) => guess === solution);
  const gameLost = guesses.length === 6 && !gameComplete;
  const isGameOver = gameComplete || gameLost;

  return (
    <div className="grid grid-rows-6 gap-1 p-2 mb-4">
      {/* Previous guesses */}
      {guesses.map((guess, i) => (
        <div key={i} className="grid grid-cols-5 gap-1">
          {guess.split("").map((letter, j) => (
            <div
              key={j}
              className={`
                w-14 h-14 
                flex items-center justify-center
                text-2xl font-bold uppercase
                border-2 
                ${
                  getLetterStatus(letter, j, guess) === "correct"
                    ? "bg-green-500 text-white border-green-500"
                    : ""
                }
                ${
                  getLetterStatus(letter, j, guess) === "present"
                    ? "bg-yellow-500 text-white border-yellow-500"
                    : ""
                }
                ${
                  getLetterStatus(letter, j, guess) === "absent"
                    ? "bg-gray-500 text-white border-gray-500"
                    : ""
                }
              `}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}

      {/* Current guess row */}
      {!isGameOver && guesses.length < 6 && (
        <div className="grid grid-cols-5 gap-1">
          {currentGuess
            .padEnd(5)
            .split("")
            .map((letter, i) => (
              <div
                key={i}
                className="w-14 h-14 
                  flex items-center justify-center
                  text-2xl font-bold uppercase
                  border-2 border-gray-300
                  animate-pop"
              >
                {letter}
              </div>
            ))}
        </div>
      )}

      {/* Empty rows */}
      {emptyRows.map((_, i) => (
        <div key={i} className="grid grid-cols-5 gap-1">
          {Array(5)
            .fill("")
            .map((_, j) => (
              <div
                key={j}
                className="w-14 h-14 
                  flex items-center justify-center
                  border-2 border-gray-300"
              />
            ))}
        </div>
      ))}

      {(gameComplete || gameLost) && (
        <Popup
          title="Chanz, the game is joe-ver."
          buttons={[
            {
              text: "Try again, pookie wookie?",
              onClick: () => (window.location.href = "/wordle"),
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
