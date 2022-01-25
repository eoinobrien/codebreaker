import { PegColor } from '../models';
import { createGameSettingsCompressed, decodeGameSettings, encodeGameSettings, GameSettings, reverseGameSettingsCompressed } from './game';

test('encodeGameSettings with defaults returns correct value', () => {
  let game: GameSettings = {
    code: [PegColor.Red, PegColor.Green, PegColor.Yellow, PegColor.Blue],
    numberOfColors: 8,
    numberOfPegs: 4,
    totalNumberOfGuesses: 10,
    allowDuplicates: false,
  };

  let encodedString: string = 'IjAsMSwyLDMi';

  expect(encodeGameSettings(game)).toBe(encodedString);
  expect(decodeGameSettings(encodedString)).toStrictEqual(game);
});

test('encodeGameSettings with non defaults returns correct value', () => {
  let game: GameSettings = {
    code: [PegColor.Red, PegColor.Green, PegColor.Yellow, PegColor.Blue],
    numberOfColors: 6,
    numberOfPegs: 5,
    totalNumberOfGuesses: 11,
    allowDuplicates: true,
  };

  let encodedString: string = 'IjAsMSwyLDM7YzY7bjU7ZzExO2QxIg';

  expect(encodeGameSettings(game)).toBe(encodedString);
  expect(decodeGameSettings(encodedString)).toStrictEqual(game);
});

test('create/reverseGameSettingsCompressed with defaults, return just code', () => {
  let game: GameSettings = {
    code: [PegColor.Red, PegColor.Green, PegColor.Yellow, PegColor.Blue],
    numberOfColors: 8,
    numberOfPegs: 4,
    totalNumberOfGuesses: 10,
    allowDuplicates: false,
  };

  let compressedString: string = '0,1,2,3';

  expect(createGameSettingsCompressed(game)).toBe(compressedString);
  expect(reverseGameSettingsCompressed(compressedString)).toStrictEqual(game);
});

test('create/reverseGameSettingsCompressed with all non defaults, return everything', () => {
  let game: GameSettings = {
    code: [PegColor.Red, PegColor.Green, PegColor.Yellow, PegColor.Blue],
    numberOfColors: 6,
    numberOfPegs: 5,
    totalNumberOfGuesses: 11,
    allowDuplicates: true,
  };

  let compressedString: string = '0,1,2,3;c6;n5;g11;d1';

  expect(createGameSettingsCompressed(game)).toBe(compressedString);
  expect(reverseGameSettingsCompressed(compressedString)).toStrictEqual(game);
});

test('create/reverseGameSettingsCompressed with one non defaults, return code and pegs', () => {
  let game: GameSettings = {
    code: [PegColor.Red, PegColor.Green, PegColor.Yellow, PegColor.Blue],
    numberOfColors: 8,
    numberOfPegs: 5,
    totalNumberOfGuesses: 10,
    allowDuplicates: false,
  };

  let compressedString: string = '0,1,2,3;n5';

  expect(createGameSettingsCompressed(game)).toBe(compressedString);
  expect(reverseGameSettingsCompressed(compressedString)).toStrictEqual(game);
});