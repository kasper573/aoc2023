export function sumOfPossibleGameIDs(
  input: string,
  availableCubes: CubeCounts
): number {
  const games = parseGames(input);
  const possibleGames = games.filter((game) =>
    game.cubes.every((set) => isSetPossible(set, availableCubes))
  );
  const sumOfIDs = possibleGames.reduce((sum, game) => sum + game.id, 0);
  return sumOfIDs;
}

function parseGames(input: string): Game[] {
  const lines = input.split(/[\n\r]+/);
  return lines.map(parseGame);
}

function parseGame(input: string): Game {
  const result = /^game\s+(\d+):(.*)$/i.exec(input);
  if (!result) {
    throw new Error("Could not parse game");
  }
  const [, idString, setsText] = result;
  return {
    id: Number(idString),
    cubes: parseCubeSets(setsText),
  };
}

function parseCubeSets(setsText: string): CubeSet[] {
  return setsText.split(";").map((setText) =>
    Object.fromEntries(
      setText.split(",").map((cubeText) => {
        const result = /^(\d+)\s+(\w+)$/i.exec(cubeText.trim());
        if (!result) {
          throw new Error("Could not parse cube");
        }
        const [, countText, colorName] = result;
        return [colorName as Color, Number(countText)] as const;
      })
    )
  );
}

function isSetPossible(
  gameCubes: Partial<CubeCounts>,
  availableCubes: CubeCounts
): boolean {
  for (const [color, count] of Object.entries(gameCubes)) {
    const maxCount = availableCubes[color as Color];
    if (count > maxCount) {
      return false;
    }
  }
  return true;
}

interface Game {
  id: number;
  cubes: CubeSet[];
}

type Color = "red" | "blue" | "green";
type CubeSet = Partial<CubeCounts>;
type CubeCounts = Record<Color, number>;
