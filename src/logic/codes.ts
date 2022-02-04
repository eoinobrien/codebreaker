import { Key, PegColor } from 'models';

export function createCode(
  colors: PegColor[],
  numberOfPegs: number,
  allowDuplicates: boolean = false,
): PegColor[] {
  let pegs: PegColor[] = [];

  for (let i = 0; i < numberOfPegs; i++) {
    let peg = randomPegColor(colors);
    while (!allowDuplicates && pegs.indexOf(peg) !== -1) {
      peg = randomPegColor(colors);
    }
    pegs.push(peg);
  }

  return pegs;
}

function randomPegColor(colors: PegColor[]): PegColor {
  return colors[Math.floor(Math.random() * colors.length)];
}

export function keysFromGuess(code: PegColor[], guess: PegColor[]): Key[] {
  let keys: Key[] = [];
  let consumedIndexes: number[] = [];

  code.forEach((codePeg, codeIndex) => {
    let keyResult: Key | undefined;

    guess.every((guessPeg, guessIndex) => {
      if (codePeg === guessPeg) {
        if (codeIndex === guessIndex) {
          keyResult = Key.RightColorRightSlot;
          consumedIndexes.push(guessIndex);
          return false;
        } else if (consumedIndexes.indexOf(guessIndex) === -1) {
          keyResult = Key.RightColorWrongSlot;
        }

        consumedIndexes.push(guessIndex);
      }

      return true; // keep the loop going
    });

    keyResult !== undefined && keys.push(keyResult);
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
