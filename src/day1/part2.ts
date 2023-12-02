export function calibrateDocument(inputText: string): number {
  const inputLines = inputText.split(/[\n\r]+/);
  return inputLines.reduce((sum, line) => sum + lineCalibrationValue(line), 0);
}

export function lineCalibrationValue(line: string): number {
  const results = Array.from(findDigitStrings(line));

  const firstResult = results[0];
  const firstNumber = numericWordMap[firstResult] ?? Number(firstResult);
  const lastResult = results[results.length - 1];
  const lastNumber = numericWordMap[lastResult] ?? Number(lastResult);

  return Number(`${firstNumber}${lastNumber}`);
}

function* findDigitStrings(line: string) {
  for (let i = 0; i < line.length; i++) {
    const matchingWord = numericWords.find(
      (word) => word === line.substring(i, i + word.length)
    );
    if (matchingWord) {
      yield matchingWord;
    } else if (/\d/.test(line[i])) {
      yield line[i];
    }
  }
}

const numericWordMap: Record<string, number> = {
  zero: 0,
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

const numericWords = Object.keys(numericWordMap);
