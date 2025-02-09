"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LetterVerificationPopup from "@/components/letter/LetterVerificationPopup";
import { useState } from "react";
import RejectPopup from "@/components/letter/RejectPopup";
import YesPopup from "@/components/letter/YesPopup";

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
          <p className="text-lg mb-8 text-black w-3/4">
            How's it going pineapple. You really thought I was not gonna ask you
            to be my valentine huh. Well, think again 😤. <br /> I am literally
            in love with you, so of course I was gonna ask you in the most extra
            way possible. I had a couple of ideas for this, like sending a
            letter (I even took sheets from office for this), send you some
            dessert with a note, or this, a full-on clone of NYT Games, but
            chandy themed. <br /> Now nothing actually happens when you say yes
            (or no 😔), other than the satisfaction of knowing that in 2025, I
            am your Valentine, and you are mine 🥰🥰🥰🥰. So till I show up next
            weekend (Feb 14th 2025 if, for some reason, we come back to this
            website later on), enjoy some games I made for you. Ignore any and
            all bugs because, unlike me, nothing is perfect. <br /> I love you
            pookie, and so that begs the question....
          </p>

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
