interface TileProps {
  word: string;
  selected: boolean;
  found: boolean;
  onClick: () => void;
}

export function Tile({ word, selected, found, onClick }: TileProps) {
  return (
    <button
      className={`
        w-full p-2 rounded text-center transition-colors
        ${
          found
            ? "bg-green-200 cursor-not-allowed"
            : selected
            ? "bg-blue-200"
            : "bg-gray-100 hover:bg-gray-200"
        }
      `}
      onClick={onClick}
      disabled={found}
    >
      {word}
    </button>
  );
}
