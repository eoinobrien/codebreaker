import { Key } from 'models';
import { convertKeysToEmojis } from './EndGame';

test('convertKeysToEmojis returns correct Emojis for one row of keys', () => {
  let keys = [[Key.RightColorRightSlot, Key.RightColorWrongSlot]];

  expect(convertKeysToEmojis(keys, 3)).toBe('🔴⚪⚫');
});

test('convertKeysToEmojis returns all black emojis for empty row of keys', () => {
  let keys = [[]];

  expect(convertKeysToEmojis(keys, 3)).toBe('⚫⚫⚫');
});

test('convertKeysToEmojis returns correct string of multiline emojis for multiple row of Keys', () => {
  let keys = [
    [],
    [Key.RightColorRightSlot],
    [Key.RightColorRightSlot, Key.RightColorWrongSlot],
    [Key.RightColorRightSlot, Key.RightColorRightSlot, Key.RightColorRightSlot],
  ];

  expect(convertKeysToEmojis(keys, 3)).toBe('⚫⚫⚫\n🔴⚫⚫\n🔴⚪⚫\n🔴🔴🔴');
});
