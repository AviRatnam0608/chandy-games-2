"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LetterVerificationPopup from "@/components/letter/LetterVerificationPopup";
import { useState } from "react";

export default function Letter() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="min-h-screen bg-pastel-green flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-black">Hi Chanz</h1>
      <p className="text-lg mb-8 text-black">letter content here?</p>
      {showPopup && (
        <LetterVerificationPopup onClose={() => setShowPopup(false)} />
      )}
      <Link href="/">
        <Button variant="brutal_blue">Back to Home</Button>
      </Link>
    </div>
  );
}
