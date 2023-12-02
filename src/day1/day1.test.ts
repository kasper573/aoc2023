import * as fs from "fs";
import * as path from "path";
import { describe, expect, it } from "vitest";
import * as part1 from "./part1";
import * as part2 from "./part2";

describe("day1", () => {
  it("part1: can get correct result for example", () => {
    const result = part1.calibrateDocument(part1ExampleDocument);
    expect(result).toBe(142);
  });

  it("part1: input", () => {
    const result = part1.calibrateDocument(inputText);
    expect(result).toBe(54081);
  });

  it("part2: example", () => {
    const result = part2.calibrateDocument(part2ExampleDocument);
    expect(result).toBe(281);
  });

  it("part2: input", () => {
    const result = part2.calibrateDocument(inputText);
    expect(result).toBe(54649);
  });
});

const part1ExampleDocument = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const part2ExampleDocument = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

const inputFile = path.resolve(__dirname, "input.txt");
const inputText = fs.readFileSync(inputFile, "utf-8");
