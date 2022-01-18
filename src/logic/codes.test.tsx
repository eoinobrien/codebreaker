import { Key, PegColor } from '../models';
import { keysFromGuess } from './codes';

test('keysFromGuess no items in guess in code. Returns all WrongColor', () => {
  let code = [PegColor.Red, PegColor.Red, PegColor.Red, PegColor.Red];
  let guess = [PegColor.White, PegColor.White, PegColor.White, PegColor.White];

  expect(keysFromGuess(code, guess)).toStrictEqual([]);
});

test('keysFromGuess one items in guess in code, in first slot. Returns RightColorRightSlot', () => {
  let code = [PegColor.Red, PegColor.Red, PegColor.Red, PegColor.Red];
  let guess = [PegColor.Red, PegColor.White, PegColor.White, PegColor.White];

  expect(keysFromGuess(code, guess)).toStrictEqual([Key.RightColorRightSlot]);
});

test('keysFromGuess one items in guess in code, in second slot. Returns RightColorWrongSlot', () => {
  let code = [PegColor.Red, PegColor.Black, PegColor.Red, PegColor.Red];
  let guess = [PegColor.White, PegColor.Red, PegColor.White, PegColor.White];

  expect(keysFromGuess(code, guess)).toStrictEqual([Key.RightColorWrongSlot]);
});

test('keysFromGuess one color from Code occurs twice incorrectly in guess. Returns one RightColorWrongSlot', () => {
  let code = [PegColor.Black, PegColor.Red, PegColor.Red, PegColor.Red];
  let guess = [PegColor.White, PegColor.Black, PegColor.Black, PegColor.White];

  expect(keysFromGuess(code, guess)).toStrictEqual([Key.RightColorWrongSlot]);
});

test('keysFromGuess one color from Code occurs twice, once correctly in guess. Returns one RightColorRightSlot', () => {
  let code = [PegColor.Red, PegColor.Black, PegColor.Red, PegColor.Red];
  let guess = [PegColor.White, PegColor.Black, PegColor.Black, PegColor.White];

  expect(keysFromGuess(code, guess)).toStrictEqual([Key.RightColorWrongSlot]);
});
