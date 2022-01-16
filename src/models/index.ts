export enum Color {
  Red = "Red",
  Green = "Green",
  Yellow = "Yellow",
  Blue = "Blue",
  Black = "Black",
  White = "White",
  Blank = "Blank",
}

export enum Key {
  RightColorRightSlot,
  RightColorWrongSlot,
  WrongColor,
}

export type PegSlot = {
  color: Color;
};

export type Guess = {
  Code: PegSlot[];
  Key: Key[];
};

export type Game = {
  Code: PegSlot[];
  Guesses: Guess[];
};
