import { PegColor } from '../models';
import { decodeGameSettings, encodeGameSettings, GameSettings } from './game';

test('encodeGameSettings returns correct value', () => {
  let game: GameSettings = {
    code: [PegColor.Red, PegColor.Green, PegColor.Yellow, PegColor.Blue],
    numberOfColors: 8,
    numberOfPegs: 4,
    totalNumberOfGuesses: 10,
    allowDuplicates: false,
  };

  let encodedString: string =
    'eyJwIjpbMCwxLDIsM10sImMiOjgsIm4iOjQsImciOjEwLCJkIjpmYWxzZX0=';

  expect(encodeGameSettings(game)).toBe(encodedString);
  expect(decodeGameSettings(encodedString)).toStrictEqual(game);
});
