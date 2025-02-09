"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LetterVerificationPopup from "@/components/letter/LetterVerificationPopup";
import { useState } from "react";
import RejectPopup from "@/components/letter/RejectPopup";
import YesPopup from "@/components/letter/YesPopup";
import { LetterText } from "@/components/letter/LetterText";

export default function Letter() {
  const [showPopup, setShowPopup] = useState(true);
  const [showRejectPopup, setShowRejectPopup] = useState(false);
  const [showYesPopup, setShowYesPopup] = useState(false);

  const onClickYes = () => {
    setShowYesPopup(true);
  };

  return (
    <div className="min-h-screen bg-pastel-green flex flex-col items-center justify-center p-8">
      {showPopup && (
        <>
          <LetterVerificationPopup onClose={() => setShowPopup(false)} />
          <div className="mt-4">
            You think you're sooo clever for deleting the pop-up huh?
          </div>
        </>
      )}
      {!showPopup && (
        <>
          <h1 className="text-4xl font-bold mb-8 text-black">Hi Chanz</h1>
          <LetterText />

          <div className="mt-4">
            <h1 className="text-2xl font-bold mb-8 text-black">
              Will you be my valentine? 🥰🥰🥰🥰
              <br />
              <span className="text-sm text-gray-800">
                (Back to home is not an option pls)
              </span>
            </h1>
            <div className="flex gap-4">
              <Button variant="brutal_yellow" onClick={() => onClickYes()}>
                Yes
              </Button>
              <Button
                variant="brutal_red"
                onClick={() => setShowRejectPopup(true)}
              >
                No
              </Button>
            </div>
          </div>
        </>
      )}

      {showRejectPopup && (
        <RejectPopup onClose={() => setShowRejectPopup(false)} />
      )}

      {showYesPopup && <YesPopup onClose={() => setShowYesPopup(false)} />}

      <div className="mt-4">
        <Link href="/">
          <Button variant="brutal_blue">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
