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

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-4 border-black transform -rotate-1">
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
