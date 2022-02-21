import { Buffer } from 'buffer';
import { GameSettings, PegColor } from 'models';
import { createCode } from './codes';

const NUMBER_OF_COLORS: number = 8;
const NUMBER_OF_PEGS: number = 4;
const TOTAL_NUMBER_OF_GUESSES: number = 10;
const ALLOW_DUPLICATES: number = 0; // false
const SEPARATOR: string = ';';

export const BASE64_ALPHABET: string =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export const DEFAULT_GAME_SETTINGS: GameSettings = {
  numberOfColors: 8,
  numberOfPegs: 4,
  totalNumberOfGuesses: 10,
  allowDuplicates: false,
};

export function createGameSettingsCompressed(code: PegColor[], game: GameSettings): string {
  let compressed: string[] = [];

  let stringifiedCode = JSON.stringify(code);
  compressed.push(stringifiedCode.substring(1, stringifiedCode.length - 1));

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
): { code: PegColor[], settings: GameSettings }  {
  let compressed: string[] = settingsString.split(SEPARATOR);
  let nonCodeSettings: string[] = compressed.slice(1);

  let code = createCode();
  try {
    code = JSON.parse(`[${compressed[0]}]`);
  }
  catch {
    console.warn('URL Code is invalid, using default settings');
  }
    
  let settings: GameSettings = {
    numberOfColors: findSetting(nonCodeSettings, 'c') ?? NUMBER_OF_COLORS,
    numberOfPegs: findSetting(nonCodeSettings, 'n') ?? NUMBER_OF_PEGS,
    totalNumberOfGuesses:
      findSetting(nonCodeSettings, 'g') ?? TOTAL_NUMBER_OF_GUESSES,
    allowDuplicates:
      (findSetting(nonCodeSettings, 'd') ?? ALLOW_DUPLICATES) === 1
        ? true
        : false,
  };

  return { code, settings };
}

function findSetting(compressed: string[], letter: string): number | undefined {
  if (compressed.length === 0) {
    return undefined;
  }

  let value: number | undefined = undefined;

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

export function encodeGameSettings(code: PegColor[], game: GameSettings): string {
  return Buffer.from(createGameSettingsCompressed(code, game)).toString(
    'base64',
  );
}

export function decodeGameSettings(encodedSettings: string): { code: PegColor[], settings: GameSettings } {
  let decodedData = Buffer.from(encodedSettings, 'base64').toString(
    'ascii',
  );

  return reverseGameSettingsCompressed(decodedData);
}