export function checkGuess(
  selectedWords: string[],
  groups: string[][]
): boolean {
  return groups.some(
    (group) =>
      group.every((word) => selectedWords.includes(word)) &&
      selectedWords.every((word) => group.includes(word))
  );
}

export function isGameComplete(
  foundGroups: string[][],
  allGroups: string[][],
  mistakes: number
): boolean {
  return foundGroups.length === allGroups.length || mistakes === 4;
}
