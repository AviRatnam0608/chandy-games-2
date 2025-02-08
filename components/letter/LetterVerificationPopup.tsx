import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface LetterVerificationPopupProps {
  onClose: () => void;
}

export default function LetterVerificationPopup({
  onClose,
}: LetterVerificationPopupProps) {
  const router = useRouter();

  const [nicknames, setNicknames] = useState<string[]>([]);
  const listOfAcceptableNicknames = [
    "chanzy panzy",
    "pookie wookie",
    "cherry",
    "chanzy",
    "panzy",
    "wookie",
    "chandy",
  ];

  //   const onCLickEnter = () => {
  //     if (listOfAcceptableNicknames.includes(nicknames[0])) {
  //       router.push("/letter");
  //       .dismiss();
  //     }
  //   };

  const handleWelcome = () => {
    router.push("/letter");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-4 border-black transform -rotate-1">
        <h2 className="text-2xl font-bold mb-4 transform rotate-1">
          Wait a minute, you're not Chanz! (or are you?)
        </h2>
        <p className="text-lg mb-4 text-black">
          If you are Chanz, please verify your identity by entering your
          nickname(s) below. <br /> This letter is for Chanz only, but if you're
          a recruiter we can talk too 😌 <br /> PS: Chanz is not counted as a
          nickname lol
        </p>
        <Input
          type="text"
          placeholder="Enter your nickname"
          value={nicknames[0]}
          onChange={(e) => setNicknames([e.target.value])}
        />

        {nicknames.length > 0 &&
          listOfAcceptableNicknames.includes(nicknames[0]) && (
            <div className="mt-4">
              <Button onClick={handleWelcome} variant="brutal_yellow">
                Alright, welcome mi amor
              </Button>
            </div>
          )}
        <div className="mt-4">
          <Button onClick={() => router.push("/")} variant="brutal_blue">
            Oh oops, back to home
          </Button>
        </div>
      </div>
    </div>
  );
}
