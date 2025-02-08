interface Group {
  words: string[];
  theme: string;
}

interface Puzzle {
  words: string[];
  groups: Group[];
}

const puzzles: Puzzle[] = [
  {
    words: [
      "APPLE",
      "BANANA",
      "ORANGE",
      "GRAPE",
      "DOG",
      "CAT",
      "HAMSTER",
      "RABBIT",
      "RED",
      "BLUE",
      "GREEN",
      "YELLOW",
      "CHAIR",
      "TABLE",
      "DESK",
      "COUCH",
    ],
    groups: [
      {
        words: ["APPLE", "BANANA", "ORANGE", "GRAPE"],
        theme: "Fruits",
      },
      {
        words: ["DOG", "CAT", "HAMSTER", "RABBIT"],
        theme: "Pets",
      },
      {
        words: ["RED", "BLUE", "GREEN", "YELLOW"],
        theme: "Colors",
      },
      {
        words: ["CHAIR", "TABLE", "DESK", "COUCH"],
        theme: "Furniture",
      },
    ],
  },
  // Add more puzzles here
];

export function getRandomPuzzle(): Puzzle {
  const randomIndex = Math.floor(Math.random() * puzzles.length);
  return puzzles[randomIndex];
}
