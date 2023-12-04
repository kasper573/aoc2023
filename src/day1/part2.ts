export function calibrateDocument(inputText: string): number {
  const inputLines = inputText.split(/[\n\r]+/);
  return inputLines.reduce((sum, line) => sum + lineValue(line), 0);
}

export function lineValue(line: string): number {
  const firstNumber = firstDigit(line, 1);
  const lastNumber = firstDigit(line, -1);
  return Number(`${firstNumber}${lastNumber}`);
}

function firstDigit(str: string, direction: 1 | -1): number | undefined {
  const [init, end] = direction === 1 ? [0, str.length] : [str.length - 1, -1];

  for (let i = init; i !== end; i += direction) {
    if (/\d/.test(str[i])) {
      return Number(str[i]);
    }
    const word = numberWords.find((w) => w === str.substring(i, i + w.length));
    if (word) {
      return numberWordMap[word];
    }
  }
}

const numberWordMap: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const numberWords = Object.keys(numberWordMap);
