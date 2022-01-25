import { Buffer } from 'buffer';
import { Game, PegColor, PegColorsArray } from '../models';
import { createCode } from './codes';

const NumberOfColors: number = 8;
const NumberOfPegs: number = 4;
const TotalNumberOfGuesses: number = 10;
const AllowDuplicates: number = 0; // false

export type GameSettings = {
  code: PegColor[];
  numberOfColors: number;
  numberOfPegs: number;
  totalNumberOfGuesses: number;
  allowDuplicates: boolean;
};

function createGameSettingsCompressed(game: GameSettings): string {
  let compressed: string[] = [];

  let code = JSON.stringify(game.code);
  compressed.push(code.substring(1, code.length - 1));

  compressed = createComponentString(game.numberOfColors, NumberOfColors, 'c', compressed);
  compressed = createComponentString(game.numberOfPegs, NumberOfPegs, 'n', compressed);
  compressed = createComponentString(game.totalNumberOfGuesses, TotalNumberOfGuesses, 'g', compressed);
  compressed = createComponentString(game.allowDuplicates ? 1 : 0, AllowDuplicates, 'd', compressed);

  return compressed.join(';');
}

function reverseGameSettingsCompressed(settingsString: string): GameSettings {
  let compressed: string[] = settingsString.split(';');
  let nonCodeSettings: string[] = compressed.slice(1);

  let code: PegColor[] = JSON.parse(`[${compressed[0]}]`);

  let gameSettings: GameSettings = {
    code: code,
    numberOfColors: findSetting(nonCodeSettings, 'c') ?? NumberOfColors,
    numberOfPegs: findSetting(nonCodeSettings, 'n') ?? NumberOfPegs,
    totalNumberOfGuesses: findSetting(nonCodeSettings, 'g') ?? TotalNumberOfGuesses,
    allowDuplicates: (findSetting(nonCodeSettings, 'd') ?? AllowDuplicates) === 1 ? true : false,
  };

  return gameSettings;
}

function findSetting(compressed: string[], letter: string): number | undefined {
  if (compressed.length === 0)
  {
    return undefined
  }

  compressed.forEach(c => {
    if (c.substring(0, 1) === letter) {
      return c.substring(1);
    }
  });

  return undefined;
}

function createComponentString<T>(
  value: T,
  constant: T,
  indicator: string,
  compressed: string[]
): string[] {
  if (value != constant) {
    compressed.push(`${indicator}${value}`);
  }

  return compressed;
}

export function encodeGameSettings(game: GameSettings): string {
  let serialised = JSON.stringify(createGameSettingsCompressed(game));
  let encodedString = Buffer.from(serialised).toString('base64');

  return encodedString;
}

export function decodeGameSettings(encodedSettings: string): GameSettings {
  let decodedData = Buffer.from(encodedSettings, 'base64').toString('ascii');

  return reverseGameSettingsCompressed(JSON.parse(decodedData));
}

export function createGameSettings(
  colors: PegColor[] = PegColorsArray.slice(0, NumberOfColors),
  numberOfPegs: number = NumberOfPegs,
  totalNumberOfGuesses: number = TotalNumberOfGuesses,
  allowDuplicates: boolean = AllowDuplicates === 1 ? true : false,
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
  } else {
    gameSettings = createGameSettings();
  }

  return gameSettings;
}
