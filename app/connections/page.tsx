import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GameBoard } from "@/components/connections/GameBoard";
import { GameProvider } from "@/components/connections/GameProvider";

export default function Letter() {
  return (
    <div className="min-h-screen bg-pastel-green flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-black">Chanz-nections</h1>

      {/* Add the Connections game here */}
      <div className="w-full max-w-2xl mb-8">
        <GameProvider>
          <GameBoard />
        </GameProvider>
      </div>

      <Link href="/">
        <Button variant="brutal_red">Back to Home</Button>
      </Link>
    </div>
  );
}
