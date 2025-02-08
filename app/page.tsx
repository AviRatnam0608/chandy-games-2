import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-pastel-blue flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-pastel-dark">Custom Games Hub</h1>
      <div className="flex-col gap-5">
        <Link href="/connections">
          <Button className="w-full bg-pastel-green hover:bg-blue-100 text-pastel-dark font-bold py-3 px-6 rounded-lg shadow-brutal">
            Connections
          </Button>
        </Link>
        <Link href="/crossword">
          <Button className="w-full bg-pastel-pink hover:bg-blue-100 text-pastel-dark font-bold py-3 px-6 rounded-lg shadow-brutal">
            Crossword
          </Button>
        </Link>
      </div>
    </main>
  )
}

