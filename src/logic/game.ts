import { Buffer } from 'buffer';
import { PegColor, PegColorsArray } from '../models';
import { AllowedColors, createCode } from './codes';

export type GameSettings = {
  code: PegColor[];
  numberOfColors: number;
  numberOfPegs: number;
  totalNumberOfGuesses: number;
  allowDuplicates: boolean;
};

export type GameSettingsCompressed = {
  p: PegColor[];
  c: number;
  n: number;
  g: number;
  d: boolean;
};

export function encodeGameSettings(game: GameSettings): string {
  // TODO: it would be great to not use an object, but instead a custom encoder to make the code much shorter

  let gameSettingsCompressed: GameSettingsCompressed = {
    p: game.code,
    c: game.numberOfColors,
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
    numberOfColors: deserialized.c,
    numberOfPegs: deserialized.n,
    totalNumberOfGuesses: deserialized.g,
    allowDuplicates: deserialized.d,
  };

  return gameSettings;
}

export function createGameSettings(
  colors: PegColor[] = PegColorsArray.slice(0,8),
  numberOfPegs: number = 4,
  totalNumberOfGuesses: number = 10,
  allowDuplicates: boolean = false,
): GameSettings {
  return {
    code: createCode(colors, numberOfPegs, allowDuplicates),
    numberOfColors: colors.length,
    numberOfPegs: numberOfPegs,
    totalNumberOfGuesses: totalNumberOfGuesses,
    allowDuplicates: allowDuplicates,
  };
}

export function getOrCreateGame(searchParams: URLSearchParams): GameSettings {
  let gameSettings: GameSettings;

  if (searchParams.has('code')) {
    try {
      gameSettings = decodeGameSettings(searchParams.get('code') ?? '');
    } catch (error) {
      gameSettings = createGameSettings();
    }
  }
  else {
    gameSettings = createGameSettings();
  }

  return gameSettings;
}
