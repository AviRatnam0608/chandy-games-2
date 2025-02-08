import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Letter() {
  return (
    <div className="min-h-screen bg-pastel-green flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-black">Hi Chanz</h1>
      <p className="text-lg mb-8 text-black">letter content here?</p>
      <Link href="/">
        <Button variant="brutal_blue">Back to Home</Button>
      </Link>
    </div>
  );
}
