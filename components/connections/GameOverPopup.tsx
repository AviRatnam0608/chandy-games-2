import { Button } from "@/components/ui/button";

interface GameOverPopupProps {
  startNewGame: () => void;
  router: { push: (path: string) => void };
}

export default function GameOverPopup({
  startNewGame,
  router,
}: GameOverPopupProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-4 border-black transform -rotate-1">
        <h2 className="text-2xl font-bold mb-4 transform rotate-1">
          Chanz, the game is joe-ver.
        </h2>
        <div className="space-y-4">
          <Button
            onClick={startNewGame}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform"
          >
            Try again, pookie wookie?
          </Button>
          <Button
            onClick={() => router.push("/")}
            className="w-full bg-blue-400 hover:bg-blue-500 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform"
          >
            Ok enough, back to home
          </Button>
        </div>
      </div>
    </div>
  );
}
