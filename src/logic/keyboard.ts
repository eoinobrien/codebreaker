import { KeyboardActionResult, PegColor } from '../models';

export function pushGuess(
  currentGuess: PegColor[],
  numberOfPegs: number,
  Guess: PegColor,
): KeyboardActionResult {
  if (currentGuess.length >= numberOfPegs) {
    return { guess: currentGuess, error: 'No space to add guess' };
  }

  currentGuess.push(Guess);
  
  return { guess: currentGuess };
}

export function backspace(
  currentGuess: PegColor[]
): KeyboardActionResult {
  if (currentGuess.length <= 0) {
    return { guess: currentGuess, error: 'No colors to delete' };
  }

  currentGuess.pop();
  
  return { guess: currentGuess };
}