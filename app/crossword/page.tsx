import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Crossword() {
  return (
    <div className="min-h-screen bg-pastel-pink flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-black">Crossword</h1>
      <p className="text-lg mb-8 text-black">Game content coming soon!</p>
      <Link href="/">
        <Button variant="brutal_blue">Back to Home</Button>
      </Link>
    </div>
  );
}
