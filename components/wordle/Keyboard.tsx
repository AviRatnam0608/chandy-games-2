"use client";

import { Button } from "../ui/button";
import { useGame } from "./GameProvider";

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"],
];

export default function Keyboard() {
  const {
    updateCurrentGuess,
    addGuess,
    currentGuess,
    guesses,
    solution,
    deleteLetter,
  } = useGame();

  const getKeyStatus = (key: string) => {
    // Skip status check for special keys
    if (key === "ENTER" || key === "DELETE") return "";

    let status = "";
    // Check all guesses to find the most significant status for this key
    guesses.forEach((guess) => {
      const keyLower = key.toLowerCase();
      for (let i = 0; i < guess.length; i++) {
        if (guess[i] !== keyLower) continue;

        if (solution.word[i] === keyLower) {
          status = "correct";
        } else if (solution.word.includes(keyLower) && status !== "correct") {
          status = "present";
        } else if (!solution.word.includes(keyLower) && !status) {
          status = "absent";
        }
      }
    });
    return status;
  };

  const handleKeyClick = (key: string) => {
    if (key === "ENTER") {
      addGuess(currentGuess);
    } else if (key === "DELETE") {
      deleteLetter();
    } else {
      updateCurrentGuess(key.toLowerCase());
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-2">
      {KEYBOARD_ROWS.map((row, i) => (
        <div key={i} className="flex justify-center gap-1.5 my-1.5">
          {row.map((key) => {
            const status = getKeyStatus(key);
            return (
              <Button
                variant={
                  status === "correct"
                    ? "brutal_green"
                    : status === "present"
                    ? "brutal_yellow"
                    : status === "absent"
                    ? "brutal_dark_gray"
                    : "brutal_gray"
                }
                key={key}
                onClick={() => handleKeyClick(key)}
                className={`
                  ${key === "ENTER" || key === "DELETE" ? "px-4" : "px-3"}
                  py-4
                  rounded
                  font-bold
                  text-sm
                  transition-colors
                `}
              >
                {key}
              </Button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
