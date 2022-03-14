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

export enum GameState {
  Ongoing,
  Win,
  Loss
}

export type GameSettings = {
  numberOfColors: number;
  numberOfPegs: number;
  totalNumberOfGuesses: number;
  allowDuplicates: boolean;
  endScreenShown?: boolean;
};

export type Guess = {
  code: PegColor[];
  keys: Key[];
};

export type Game = {
  code: PegColor[];
  currentGuess: PegColor[];
  gameState: GameState;
  guesses: Guess[];
  settings: GameSettings;
};

export type KeyboardActionResult = {
  guess: PegColor[];
  error?: string;
};
