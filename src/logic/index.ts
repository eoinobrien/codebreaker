import {
  createArrayOfObject,
  createCode,
  keysFromGuess,
  keyIsCorrectGuess,
} from './codes';
import {
  encodeGameSettings,
  decodeGameSettings,
  BASE64_ALPHABET,
  DEFAULT_GAME_SETTINGS,
} from './game';
import { pushGuess, backspace } from './keyboard';
import { getPegStyling } from './pegs';

export {
  createArrayOfObject,
  createCode,
  keysFromGuess,
  keyIsCorrectGuess,
  encodeGameSettings,
  decodeGameSettings,
  BASE64_ALPHABET,
  DEFAULT_GAME_SETTINGS,
  pushGuess,
  backspace,
  getPegStyling,
};
