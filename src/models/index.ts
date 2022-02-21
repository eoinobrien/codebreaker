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
  KeyboardBackspace,
  KeyboardEnter,
}

export const PegColorsArray: PegColor[] = [
  PegColor.Red,
  PegColor.Green,
  PegColor.Yellow,
  PegColor.Blue,
  PegColor.Purple,
  PegColor.Orange,
  PegColor.Black,
  PegColor.White,
  PegColor.Pink,
  PegColor.Teal,
];

export enum Key {
  RightColorRightSlot,
  RightColorWrongSlot,
}

export type GameSettings = {
  numberOfColors: number;
  numberOfPegs: number;
  totalNumberOfGuesses: number;
  allowDuplicates: boolean;
};

export type Guess = {
  code: PegColor[];
  keys: Key[];
};

export type Game = {
  code: PegColor[];
  currentGuess: PegColor[];
  gameComplete: boolean;
  guesses: Guess[];
  settings: GameSettings;
};

export enum KeyboardActions {
  ColorPicker,
  Enter,
  Backspace,
}

export type KeyboardActionResult = {
  guess: PegColor[];
  error?: string;
};
