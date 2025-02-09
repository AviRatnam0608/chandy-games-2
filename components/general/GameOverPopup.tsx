import { Button } from "../ui/button";

interface ButtonConfig {
  text: string;
  onClick: () => void;
  className?: string;
}

interface PopupProps {
  title: string;
  buttons: ButtonConfig[];
}

export default function Popup({ title, buttons }: PopupProps) {
  const defaultButtonStyle =
    "w-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform";

  // Find the close button handler or use the first button's handler as fallback
  const handleClose = (e?: React.MouseEvent) => {
    e?.preventDefault();
    const closeHandler =
      buttons.find((b) => b.text.toLowerCase().includes("close"))?.onClick ||
      buttons[0]?.onClick;
    closeHandler();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-4 border-black transform -rotate-1 relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-0.5 transition-all rotate-1"
        >
          <span className="text-xl font-bold">&times;</span>
        </button>
        <h2 className="text-2xl font-bold mb-4 transform rotate-1">{title}</h2>
        <div className="space-y-4">
          {buttons.map((button, index) => (
            <Button
              key={index}
              onClick={button.onClick}
              className={`${defaultButtonStyle} ${button.className || ""}`}
            >
              {button.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
