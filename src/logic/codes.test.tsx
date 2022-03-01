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

test('keysFromGuess one color from Code occurs twice in guess, once correctly. Returns one RightColorRightSlot', () => {
  let code = [PegColor.Red, PegColor.Black, PegColor.Red, PegColor.Red];
  let guess = [PegColor.White, PegColor.Black, PegColor.Black, PegColor.White];

  expect(keysFromGuess(code, guess)).toStrictEqual([Key.RightColorRightSlot]);
});

test('keysFromGuess one color from Code occurs twice, once correctly. Second guess occurrence is correct. Returns one RightColorRightSlot', () => {
  let code = [PegColor.Red, PegColor.Red, PegColor.Black, PegColor.Red];
  let guess = [PegColor.White, PegColor.Black, PegColor.Black, PegColor.White];

  expect(keysFromGuess(code, guess)).toStrictEqual([Key.RightColorRightSlot]);
});

test('keysFromGuess code is one color and matches guess. Returns 4 RightColorRightSlot', () => {
  let code = [PegColor.Red, PegColor.Red, PegColor.Red, PegColor.Red];
  let guess = [PegColor.Red, PegColor.Red, PegColor.Red, PegColor.Red];

  expect(keysFromGuess(code, guess)).toStrictEqual([
    Key.RightColorRightSlot,
    Key.RightColorRightSlot,
    Key.RightColorRightSlot,
    Key.RightColorRightSlot,
  ]);
});

test('keysFromGuess code is 4 colors that match guess but wrong spot. Returns 4 RightColorWrongSlot', () => {
  let code = [PegColor.Red, PegColor.Yellow, PegColor.Blue, PegColor.Blue];
  let guess = [PegColor.Blue, PegColor.Blue, PegColor.Red, PegColor.Yellow];

  expect(keysFromGuess(code, guess)).toStrictEqual([
    Key.RightColorWrongSlot,
    Key.RightColorWrongSlot,
    Key.RightColorWrongSlot,
    Key.RightColorWrongSlot,
  ]);
});

test('keysFromGuess code is two colors that match guess but wrong spot. Returns 2 RightColorWrongSlot', () => {
  let code = [PegColor.Red, PegColor.Blue];
  let guess = [PegColor.Blue, PegColor.Red];

  expect(keysFromGuess(code, guess)).toStrictEqual([
    Key.RightColorWrongSlot,
    Key.RightColorWrongSlot,
  ]);
});

test('keysFromGuess guess has two of same colors, one matches code. Returns 1 RightColorRightSlot', () => {
  let code = [PegColor.Red, PegColor.Blue];
  let guess = [PegColor.Blue, PegColor.Blue];

  expect(keysFromGuess(code, guess)).toStrictEqual([Key.RightColorRightSlot]);
});
