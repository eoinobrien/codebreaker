export enum PegColor {
  Red = "Red",
  Green = "Green",
  Yellow = "Yellow",
  Blue = "Blue",
  Black = "Black",
  White = "White",
  Blank = "Blank",
  Hidden = "Hidden",
  KeyboardAction = "KeyboardAction"
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