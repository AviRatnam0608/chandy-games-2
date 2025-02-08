interface Word {
  word: string;
  hint: string;
}

const solutionWords: Word[] = [
  { word: "chanz", hint: "A very cute person" },
  { word: "panzy", hint: "A very cute person, alias" },
  { word: "rasam", hint: "Your favorite food" },
  { word: "messi", hint: "A very good football player" },
  { word: "mazda", hint: "Avi's pookie number 1" },
  { word: "india", hint: "country we met" },
  { word: "banan", hint: "A fruit, and a person" },
  { word: "pooki", hint: "nickname, without the e" },
  { word: "cooki", hint: "nickname, without the e, and is a monster" },
  { word: "apple", hint: "I think....." },
  { word: "alexa", hint: "what's the weather like in Toronto?" },
  { word: "cysms", hint: "intro for video calls, abbreviated" },
  { word: "paris", hint: "who was here 🤨" },
  {
    word: "singr",
    hint: "shes working late...., without the e",
  },
];

export function getRandomWord(): Word {
  return solutionWords[Math.floor(Math.random() * solutionWords.length)];
}

export async function isValidWord(word: string): Promise<boolean> {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`
    );
    return response.ok;
  } catch (error) {
    console.error("Error checking word validity:", error);
    return false;
  }
}
