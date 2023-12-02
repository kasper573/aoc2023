import { Color, CubeSet, parseGames } from "./part1";

export function sumOfMinimumSetPowers(input: string): number {
  return parseGames(input).reduce(
    (sum, game) => sum + powerOfSet(minimumSet(game.cubes)),
    0
  );
}

function minimumSet(sets: CubeSet[]): CubeSet {
  return sets.reduce((min, set) => {
    for (const [color, value] of Object.entries(set)) {
      const minValue = min[color as Color];
      if (minValue === undefined || minValue < value) {
        min[color as Color] = value;
      }
    }
    return min;
  }, {} as CubeSet);
}

function powerOfSet(set: CubeSet): number {
  const values = Object.values(set);
  if (!values.length) {
    return 0;
  }

  return values.reduce((power, value) => power * value);
}
