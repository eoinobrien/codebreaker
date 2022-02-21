import { PegColor } from 'models';

export function pushGuess(
  currentGuess: PegColor[],
  numberOfPegs: number,
  guess: PegColor,
): PegColor[] {
  if (currentGuess.length >= numberOfPegs) {
    return currentGuess
  }

  currentGuess.push(guess);

  return currentGuess;
}

export function backspace(currentGuess: PegColor[]): PegColor[] {
  if (currentGuess.length <= 0) {
    return currentGuess;
  }

  currentGuess.pop();

  return currentGuess;
}
