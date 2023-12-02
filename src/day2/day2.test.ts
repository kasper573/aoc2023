import { describe, expect, it } from "vitest";
import * as part1 from "./part1";
import * as part2 from "./part2";
import * as fs from "fs";
import * as path from "path";

describe("day2", () => {
  it("part1: example", () => {
    const result = part1.sumOfPossibleGameIDs(exampleGameRecord, {
      red: 12,
      green: 13,
      blue: 14,
    });
    expect(result).toBe(8);
  });

  it("part1: input", () => {
    const result = part1.sumOfPossibleGameIDs(inputText, {
      red: 12,
      green: 13,
      blue: 14,
    });
    expect(result).toBe(1734);
  });

  it("part2: example", () => {
    const result = part2.sumOfMinimumSetPowers(exampleGameRecord);
    expect(result).toBe(2286);
  });

  it("part2: input", () => {
    const result = part2.sumOfMinimumSetPowers(inputText);
    expect(result).toBe(70387);
  });
});

const exampleGameRecord = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

const inputFile = path.resolve(__dirname, "input.txt");
const inputText = fs.readFileSync(inputFile, "utf-8");
