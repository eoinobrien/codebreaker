import {
  createArrayOfObject,
  createCode,
  keysFromGuess,
  keyIsCorrectGuess,
} from './codes';
import {
  encodeGameSettings,
  createGameSettings,
  getOrCreateGame,
  GameSettings,
} from './game';
import { pushGuess, backspace } from './keyboard';
import { getPegStyling } from './pegs';

export {
  createArrayOfObject,
  createCode,
  keysFromGuess,
  keyIsCorrectGuess,
  encodeGameSettings,
  createGameSettings,
  getOrCreateGame,
  pushGuess,
  backspace,
  getPegStyling,
};
export type { GameSettings };
