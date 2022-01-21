import { PegColor } from '../models';
import { decodeGameSettings, encodeGameSettings, GameSettings } from './game';

test('encodeGameSettings returns correct value', () => {
  let game: GameSettings = {
    code: [PegColor.Red, PegColor.Green, PegColor.Yellow, PegColor.Blue],
    colors: [
      PegColor.Red,
      PegColor.Green,
      PegColor.Yellow,
      PegColor.Blue,
      PegColor.Orange,
      PegColor.Purple,
      PegColor.Black,
      PegColor.White,
    ],
    numberOfPegs: 4,
    totalNumberOfGuesses: 10,
    allowDuplicates: false,
  };

  let encodedString: string =
    'eyJwIjpbMCwxLDIsM10sImMiOlswLDEsMiwzLDgsNiw0LDVdLCJuIjo0LCJnIjoxMCwiZCI6ZmFsc2V9';

  expect(encodeGameSettings(game)).toBe(encodedString);
  expect(decodeGameSettings(encodedString)).toStrictEqual(game);
});
