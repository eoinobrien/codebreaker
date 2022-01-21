import { Buffer } from 'buffer';
import { PegColor } from '../models';
import { AllowedColors, createCode } from './codes';

export type GameSettings = {
  code: PegColor[];
  colors: PegColor[];
  numberOfPegs: number;
  totalNumberOfGuesses: number;
  allowDuplicates: boolean;
};

export type GameSettingsCompressed = {
  p: PegColor[];
  c: PegColor[];
  n: number;
  g: number;
  d: boolean;
};

export function encodeGameSettings(game: GameSettings): string {
  let gameSettingsCompressed: GameSettingsCompressed = {
    p: game.code,
    c: game.colors,
    n: game.numberOfPegs,
    g: game.totalNumberOfGuesses,
    d: game.allowDuplicates,
  };
  let serialised = JSON.stringify(gameSettingsCompressed);
  let encodedString = Buffer.from(serialised).toString('base64');

  return encodedString;
}

export function decodeGameSettings(encodedSettings: string): GameSettings {
  let decodedData = Buffer.from(encodedSettings, 'base64').toString('ascii');
  let deserialized: GameSettingsCompressed = JSON.parse(decodedData);
  let gameSettings: GameSettings = {
    code: deserialized.p,
    colors: deserialized.c,
    numberOfPegs: deserialized.n,
    totalNumberOfGuesses: deserialized.g,
    allowDuplicates: deserialized.d,
  };

  return gameSettings;
}

export function createGameSettings(
  colors: PegColor[] = AllowedColors,
  numberOfPegs: number = 4,
  totalNumberOfGuesses: number = 10,
  allowDuplicates: boolean = false,
): GameSettings {
  return {
    code: createCode(colors, numberOfPegs, allowDuplicates),
    colors: colors,
    numberOfPegs: numberOfPegs,
    totalNumberOfGuesses: totalNumberOfGuesses,
    allowDuplicates: allowDuplicates,
  };
}
