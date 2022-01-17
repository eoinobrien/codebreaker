export enum PegColor {
  Red = "Red",
  Green = "Green",
  Yellow = "Yellow",
  Blue = "Blue",
  Black = "Black",
  White = "White",
  Blank = "Blank",
  Hidden = "Hidden"
}

export enum Key {
  RightColorRightSlot,
  RightColorWrongSlot,
  WrongColor,
}

export type Guess = {
  code: PegColor[];
  keys: Key[];
};

export type Game = {
  code: PegColor[];
  guesses: Guess[];
};
