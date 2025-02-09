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
      "COOKIE",
      "WOOKIE",
      "POOKIE",
      "DOOKIE",
      "APPLE",
      "ESPRESSO",
      "360",
      "KARMA",
      "THE BEATLES",
      "KANYE WEST",
      "RIHANNA",
      "PINK FLOYD",
      "CTR",
      "MTR",
      "VB",
      "TT",
    ],
    groups: [
      {
        words: ["COOKIE", "WOOKIE", "POOKIE", "DOOKIE"],
        theme: "Chanz nicknames",
      },
      {
        words: ["APPLE", "ESPRESSO", "360", "KARMA"],
        theme: "Songs chanz 'loves' lmao",
      },
      {
        words: ["THE BEATLES", "KANYE WEST", "RIHANNA", "PINK FLOYD"],
        theme: "They all have songs about diamonds",
      },
      {
        words: ["CTR", "MTR", "VB", "TT"],
        theme: "Dosa places in Bangalore",
      },
    ],
  },
  {
    words: [
      "CANADA",
      "GREECE",
      "ENGLAND",
      "SPAIN",
      "BEAUTIFUL",
      "GORGEOUS",
      "PRETTY",
      "CUTE",
      "RASAM",
      "GREEN CURRY",
      "ISLAMIC NOODLES",
      "CHAAT",
      "WHO",
      "WHY",
      "WHERE",
      "WHEN",
    ],
    groups: [
      {
        words: ["CANADA", "GREECE", "ENGLAND", "SPAIN"],
        theme: "All the places your phone travelled to iykyk",
      },
      {
        words: ["BEAUTIFUL", "GORGEOUS", "PRETTY", "CUTE"],
        theme: "Things that chandy are",
      },
      {
        words: ["RASAM", "GREEN CURRY", "ISLAMIC NOODLES", "CHAAT"],
        theme: "Chanz's fav dishes",
      },
      {
        words: ["WHO", "WHY", "WHERE", "WHEN"],
        theme: "Asked",
      },
    ],
  },
  {
    words: [
      "RAMEN",
      "KUCHIPUDI",
      "WENDYS",
      "DUNKIN",
      "MAZDA",
      "LEBRON",
      "MESSI",
      "CHANDY",
      "GOLF BATTLE",
      "BELI",
      "TIK TOK",
      "INSTAGRAM",
      "BOILED EGG",
      "PANNER TIKKA",
      "PASTA",
      "CHANNA MASALA",
    ],
    groups: [
      {
        words: ["RAMEN", "KUCHIPUDI", "WENDYS", "DUNKIN"],
        theme: "Deez Nutz jokes",
      },
      {
        words: ["MAZDA", "LEBRON", "MESSI", "CHANDY"],
        theme: "Avi's Pookies",
      },
      {
        words: ["GOLF BATTLE", "BELI", "TIK TOK", "INSTAGRAM"],
        theme: "Chanz's fav apps",
      },
      {
        words: ["BOILED EGG", "PANNER TIKKA", "PASTA", "CHANNA MASALA"],
        theme: "Dishes we've cooked over video call",
      },
    ],
  },
];

export function getRandomPuzzle(): Puzzle {
  const randomIndex = Math.floor(Math.random() * puzzles.length);
  return puzzles[randomIndex];
}
