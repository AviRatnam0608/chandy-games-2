"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LetterVerificationPopup from "@/components/letter/LetterVerificationPopup";
import { useState } from "react";
import RejectPopup from "@/components/letter/RejectPopup";
export default function Letter() {
  const [showPopup, setShowPopup] = useState(true);
  const [showRejectPopup, setShowRejectPopup] = useState(false);

  return (
    <div className="min-h-screen bg-pastel-green flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-black">Hi Chanz</h1>
      <p className="text-lg mb-8 text-black">letter content here?</p>
      {showPopup && (
        <LetterVerificationPopup onClose={() => setShowPopup(false)} />
      )}

      <div className="mt-4">
        <h1 className="text-2xl font-bold mb-8 text-black">
          Will you be my valentine? 🥰🥰🥰🥰
          <br />
          <span className="text-sm text-gray-800">
            (Back to home is not an option pls)
          </span>
        </h1>
        <div className="flex gap-4">
          <Button variant="brutal_yellow">Yes</Button>
          <Button variant="brutal_red" onClick={() => setShowRejectPopup(true)}>
            No
          </Button>
        </div>
      </div>

      {showRejectPopup && (
        <RejectPopup onClose={() => setShowRejectPopup(false)} />
      )}

      <div className="mt-4">
        <Link href="/">
          <Button variant="brutal_blue">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
