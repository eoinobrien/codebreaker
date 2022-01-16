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

export type PegSlot = {
  color: PegColor;
};

export type Guess = {
  Code: PegSlot[];
  Key: Key[];
};

export type Game = {
  Code: PegSlot[];
  Guesses: Guess[];
};
