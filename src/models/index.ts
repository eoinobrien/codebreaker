export enum PegColor {
  Red,
  Green,
  Yellow,
  Blue,
  Black,
  White,
  Purple,
  Pink,
  Orange,
  Teal,

  Blank,
  Hidden,
  KeyboardAction
}

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