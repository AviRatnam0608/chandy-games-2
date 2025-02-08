import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface RejectPopUp {
  onClose: () => void;
}

export default function RejectPopUp({ onClose }: RejectPopUp) {
  const router = useRouter();

  const handleYes = () => {
    router.push("/letter");
    onClose();
  };

  const handleNo = () => {
    router.push("https://youtu.be/4fWyzwo1xg0?si=op_hQgSD9UxhZ0l2&t=2");
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-4 border-black transform -rotate-1">
        <h2 className="text-2xl font-bold mb-4 transform rotate-1">Ayo what</h2>
        <div className="flex flex-col gap-4">
          <Button variant="brutal_red" onClick={handleNo}>
            Yeah I don't wanna be your valentine
          </Button>
          <Button variant="brutal_blue" onClick={handleYes}>
            Haha jk I will be your valentine
          </Button>
        </div>
      </div>
    </div>
  );
}
