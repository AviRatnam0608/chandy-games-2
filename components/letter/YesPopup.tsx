import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface YesPopup {
  onClose: () => void;
}

export default function YesPopup({ onClose }: YesPopup) {
  const router = useRouter();

  const handleYes = () => {
    router.push("/letter");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-4 border-black transform -rotate-1">
        <h2 className="text-2xl font-bold mb-4 transform rotate-1">
          LESSSGOOOOOOOOOOOOOOOOOOOOOOOOOOOO
        </h2>
        <p className="text-lg mb-4">I LOVE YOU MUAH 🥰🥰🥰🥰</p>
        <div className="flex flex-col gap-4">
          <Button variant="brutal_red" onClick={handleYes}>
            Ok
          </Button>
        </div>
      </div>
    </div>
  );
}
