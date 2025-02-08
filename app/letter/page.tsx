import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Letter() {
  return (
    <div className="min-h-screen bg-pastel-green flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-pastel-dark">Hi Chanz</h1>
      <p className="text-lg mb-8 text-pastel-dark">letter content here?</p>
      <Link href="/">
        <Button className="bg-pastel-blue hover:bg-blue-100 text-pastel-dark font-bold py-3 px-6 rounded-lg shadow-brutal">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
