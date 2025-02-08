import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-pastel-blue flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-black">Chandy Games</h1>
      <div className="flex flex-col gap-5">
        <Link href="/letter">
          <Button variant="brutal_purple">Letter</Button>
        </Link>
        <Link href="/connections">
          <Button variant="brutal_blue">Chanz-nections</Button>
        </Link>
        <Link href="/crossword">
          <Button variant="brutal_yellow">Chanz-word</Button>
        </Link>
        <Link href="/wordle">
          <Button variant="brutal_green">Chanz-dle</Button>
        </Link>
      </div>
    </main>
  );
}
