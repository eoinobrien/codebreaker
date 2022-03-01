import { GameSettings, Key, PegColor, PegColorsArray } from 'models';

export function createCode(settings: GameSettings): PegColor[] {
  const colors = PegColorsArray.slice(0, settings.numberOfColors);

  let pegs: PegColor[] = [];

  for (let i = 0; i < settings.numberOfPegs; i++) {
    let peg = randomPegColor(colors);
    while (!settings.allowDuplicates && pegs.indexOf(peg) !== -1) {
      peg = randomPegColor(colors);
    }
    pegs.push(peg);
  }

  return pegs;
}

function randomPegColor(colors: PegColor[]): PegColor {
  return colors[Math.floor(Math.random() * colors.length)];
}

type PegCountObject = {
  indexes: number[];
  rightColorRightSlot: number;
  rightColorWrongSlot: number;
};

export function keysFromGuess(code: PegColor[], guess: PegColor[]): Key[] {
  let pegDetails = new Map<PegColor, PegCountObject>();

  code.forEach((codePeg, codeIndex) => {
    let pegCountObject = pegDetails.get(codePeg) ?? {
      indexes: [],
      rightColorRightSlot: 0,
      rightColorWrongSlot: 0,
    };
    pegCountObject.indexes.push(codeIndex);
    pegDetails.set(codePeg, pegCountObject);
  });

  guess.forEach((guessPeg, guessIndex) => {
    // guessPeg exists in Code
    if (pegDetails.has(guessPeg)) {
      let pegCountObject = pegDetails.get(guessPeg) ?? {
        indexes: [],
        rightColorRightSlot: 0,
        rightColorWrongSlot: 0,
      };

      // If guessPeg index matches code index
      if (pegCountObject.indexes.indexOf(guessIndex) === -1) {
        pegCountObject.rightColorWrongSlot++;
      } else {
        pegCountObject.rightColorRightSlot++;
      }

      pegDetails.set(guessPeg, pegCountObject);
    }
  });

  let keys: Key[] = [];

  pegDetails.forEach((value) => {
    keys.push(
      ...createArrayOfObject(
        Key.RightColorRightSlot,
        value.rightColorRightSlot,
      ),
    );

    let remainingIndexes = value.indexes.length - value.rightColorRightSlot;
    keys.push(
      ...createArrayOfObject(
        Key.RightColorWrongSlot,
        Math.min(value.rightColorWrongSlot, remainingIndexes),
      ),
    );
  });

  keys.sort((a, b) => a - b);

  return keys;
}

export function arraysMatchExactly<T>(array1: T[], array2: T[]): boolean {
  if (array1.length !== array2.length) {
    return false;
  }

  let match: boolean = true;

  for (let index = 0; match && index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      match = false;
    }
  }

  return match;
}

export function keyIsCorrectGuess(
  guessKey: Key[],
  numberOfPegs: number = 4,
): boolean {
  let keys: Key[] = createArrayOfObject(Key.RightColorRightSlot, numberOfPegs);

  return arraysMatchExactly(guessKey, keys);
}

export function createArrayOfObject<T>(object: T, numberOfItems: number): T[] {
  let array: T[] = [];

  for (let i = 0; i < numberOfItems; i++) {
    array.push(object);
  }

  return array;
}
