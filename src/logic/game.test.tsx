import { GameSettings, PegColor } from '../models';
import {
  createGameSettingsCompressed,
  decodeGameSettings,
  encodeGameSettings,
  reverseGameSettingsCompressed,
} from './game';

test('encodeGameSettings with defaults returns correct value', () => {
  let code = [PegColor.Red, PegColor.Green, PegColor.Yellow, PegColor.Blue];
  let settings: GameSettings = {
    numberOfColors: 8,
    numberOfPegs: 4,
    totalNumberOfGuesses: 10,
    allowDuplicates: false,
    isDaily: false,
  };

  let encodedString: string = 'MCwxLDIsMw==';

  expect(encodeGameSettings(code, settings)).toBe(encodedString);
  expect(decodeGameSettings(encodedString)).toStrictEqual({ code, settings });
});

test('encodeGameSettings with non defaults returns correct value', () => {
  let code = [PegColor.Red, PegColor.Green, PegColor.Yellow, PegColor.Blue];
  let settings: GameSettings = {
    numberOfColors: 6,
    numberOfPegs: 5,
    totalNumberOfGuesses: 11,
    allowDuplicates: true,
    isDaily: false,
  };

  let encodedString: string = 'MCwxLDIsMztjNjtuNTtnMTE7ZDE=';

  expect(encodeGameSettings(code, settings)).toBe(encodedString);
  expect(decodeGameSettings(encodedString)).toStrictEqual({ code, settings });
});

test('create/reverseGameSettingsCompressed with defaults, return just code', () => {
  let code = [PegColor.Red, PegColor.Green, PegColor.Yellow, PegColor.Blue];
  let settings: GameSettings = {
    numberOfColors: 8,
    numberOfPegs: 4,
    totalNumberOfGuesses: 10,
    allowDuplicates: false,
    isDaily: false,
  };

  let compressedString: string = '0,1,2,3';

  expect(createGameSettingsCompressed(code, settings)).toBe(compressedString);
  expect(reverseGameSettingsCompressed(compressedString)).toStrictEqual({
    code,
    settings,
  });
});

test('create/reverseGameSettingsCompressed with all non defaults, return everything', () => {
  let code = [PegColor.Red, PegColor.Green, PegColor.Yellow, PegColor.Blue];
  let settings: GameSettings = {
    numberOfColors: 6,
    numberOfPegs: 5,
    totalNumberOfGuesses: 11,
    allowDuplicates: true,
    isDaily: false,
  };

  let compressedString: string = '0,1,2,3;c6;n5;g11;d1';

  expect(createGameSettingsCompressed(code, settings)).toBe(compressedString);
  expect(reverseGameSettingsCompressed(compressedString)).toStrictEqual({
    code,
    settings,
  });
});

test('create/reverseGameSettingsCompressed with one non defaults, return code and pegs', () => {
  let code = [PegColor.Red, PegColor.Green, PegColor.Yellow, PegColor.Blue];
  let settings: GameSettings = {
    numberOfColors: 8,
    numberOfPegs: 5,
    totalNumberOfGuesses: 10,
    allowDuplicates: false,
    isDaily: false,
  };

  let compressedString: string = '0,1,2,3;n5';

  expect(createGameSettingsCompressed(code, settings)).toBe(compressedString);
  expect(reverseGameSettingsCompressed(compressedString)).toStrictEqual({
    code,
    settings,
  });
});

test('create/reverseGameSettingsCompressed with one non defaults and daily, return code and pegs', () => {
  let code = [PegColor.Red, PegColor.Green, PegColor.Yellow, PegColor.Blue];
  let settings: GameSettings = {
    numberOfColors: 8,
    numberOfPegs: 5,
    totalNumberOfGuesses: 10,
    allowDuplicates: false,
    isDaily: true,
  };

  let compressedString: string = '0,1,2,3;n5;y';

  expect(createGameSettingsCompressed(code, settings)).toBe(compressedString);
  expect(reverseGameSettingsCompressed(compressedString)).toStrictEqual({
    code,
    settings,
  });
});
