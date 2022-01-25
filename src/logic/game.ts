import { Buffer } from 'buffer';
import { PegColor, PegColorsArray } from '../models';
import { createCode } from './codes';

const NUMBER_OF_COLORS: number = 8;
const NUMBER_OF_PEGS: number = 4;
const TOTAL_NUMBER_OF_GUESSES: number = 10;
const ALLOW_DUPLICATES: number = 0; // false
const SEPARATOR: string = ';';

export type GameSettings = {
  code: PegColor[];
  numberOfColors: number;
  numberOfPegs: number;
  totalNumberOfGuesses: number;
  allowDuplicates: boolean;
};

export function createGameSettingsCompressed(game: GameSettings): string {
  let compressed: string[] = [];

  let code = JSON.stringify(game.code);
  compressed.push(code.substring(1, code.length - 1));

  compressed = createComponentString(
    game.numberOfColors,
    NUMBER_OF_COLORS,
    'c',
    compressed,
  );
  compressed = createComponentString(
    game.numberOfPegs,
    NUMBER_OF_PEGS,
    'n',
    compressed,
  );
  compressed = createComponentString(
    game.totalNumberOfGuesses,
    TOTAL_NUMBER_OF_GUESSES,
    'g',
    compressed,
  );
  compressed = createComponentString(
    game.allowDuplicates ? 1 : 0,
    ALLOW_DUPLICATES,
    'd',
    compressed,
  );

  return compressed.join(SEPARATOR);
}

export function reverseGameSettingsCompressed(
  settingsString: string,
): GameSettings {
  let compressed: string[] = settingsString.split(SEPARATOR);
  let nonCodeSettings: string[] = compressed.slice(1);

  let code: PegColor[] = JSON.parse(`[${compressed[0]}]`);

  let gameSettings: GameSettings = {
    code: code,
    numberOfColors: findSetting(nonCodeSettings, 'c') ?? NUMBER_OF_COLORS,
    numberOfPegs: findSetting(nonCodeSettings, 'n') ?? NUMBER_OF_PEGS,
    totalNumberOfGuesses:
      findSetting(nonCodeSettings, 'g') ?? TOTAL_NUMBER_OF_GUESSES,
    allowDuplicates:
      (findSetting(nonCodeSettings, 'd') ?? ALLOW_DUPLICATES) === 1
        ? true
        : false,
  };

  return gameSettings;
}

function findSetting(compressed: string[], letter: string): number | undefined {
  if (compressed.length === 0) {
    return undefined;
  }

  let value : number | undefined = undefined;

  compressed.forEach((c) => {
    if (c.substring(0, 1) === letter) {
      value = parseInt(c.substring(1));
    }
  });

  return value;
}

function createComponentString<T>(
  value: T,
  constant: T,
  indicator: string,
  compressed: string[],
): string[] {
  if (value !== constant) {
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
  colors: PegColor[] = PegColorsArray.slice(0, NUMBER_OF_COLORS),
  numberOfPegs: number = NUMBER_OF_PEGS,
  totalNumberOfGuesses: number = TOTAL_NUMBER_OF_GUESSES,
  allowDuplicates: boolean = ALLOW_DUPLICATES === 1 ? true : false,
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
