export function calibrateDocument(inputText: string): number {
  const inputLines = inputText.split(/[\n\r]+/);
  return inputLines.reduce((sum, line) => sum + lineCalibrationValue(line), 0);
}

function lineCalibrationValue(line: string): number {
  const characters = Array.from(line);
  const first = characters.find(isNumeric);
  const last = characters.findLast(isNumeric);
  return Number(`${first}${last}`);
}

function isNumeric(char: string) {
  return /\d/.test(char);
}
