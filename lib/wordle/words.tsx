const solutionWords = ["chanz", "panzy", "rasam", "messi", "mazda"];

export function getRandomWord(): string {
  console.log(solutionWords[Math.floor(Math.random() * solutionWords.length)]);
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
