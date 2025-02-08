import Link from "next/link";
import { Button } from "@/components/ui/button";
import GameBoard from "@/components/wordle/GameBoard";
import Keyboard from "@/components/wordle/Keyboard";
import { GameProvider } from "@/components/wordle/GameProvider";

export default function Wordle() {
  return (
    <div className="min-h-screen bg-pastel-pink flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-black">Chanz-dle</h1>

      <div className="w-full mb-8">
        <GameProvider>
          <div className="flex flex-col h-full">
            <main className="flex-grow flex flex-col items-center justify-center gap-4">
              <GameBoard />
              <Keyboard />
            </main>
          </div>
        </GameProvider>
      </div>

      <Link href="/">
        <Button variant="brutal_blue">Back to Home</Button>
      </Link>
    </div>
  );
}
