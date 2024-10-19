import { test, expect } from '@jest/globals';
import { orderByProperties } from '../orderByProperties';

test('Testing the `orderByProperties()` function', () => {
  const result = orderByProperties(
    {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40
    },
    [
      'defence', 'name', 'level'
    ]
  );

  const expected = [
    { key: 'defence', value: 40 },
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 }
  ];

  expect(result).toEqual(expected);
});

