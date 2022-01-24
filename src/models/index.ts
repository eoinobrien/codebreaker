export enum PegColor {
  Red = 0,
  Green,
  Yellow,
  Blue,
  Black,
  White,
  Purple,
  Pink,
  Orange,
  Teal,

  Blank = 100,
  Hidden,
  KeyboardAction
}

export const PegColorsArray: PegColor[] = [
  PegColor.Red,
  PegColor.Green,
  PegColor.Yellow,
  PegColor.Blue,
  PegColor.Pink,
  PegColor.Orange,
  PegColor.Black,
  PegColor.White,
  PegColor.Purple,
  PegColor.Teal,
]

export enum Key {
  RightColorRightSlot,
  RightColorWrongSlot
}

export type Guess = {
  code: PegColor[];
  keys: Key[];
  currentGuess?: boolean;
};

export type Game = {
  code: PegColor[];
  guesses: Guess[];
};

export enum KeyboardActions {
  ColorPicker,
  Enter,
  Backspace
}

export type KeyboardActionResult = {
  guess: PegColor[],
  error?: string
}