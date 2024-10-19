import { test, expect } from '@jest/globals';
import { destructuring } from '../destructuring';

test('Testing the `destructuring()` function', () => {
  const result = destructuring({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        description: 'Двойной выстрел наносит двойной урон',
        icon: 'http://...'
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
      }
    ]
  });

  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      description: 'Двойной выстрел наносит двойной урон',
      icon: 'http://...'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      description: 'Описание недоступно',
      icon: 'http://...'
    }
  ];

  expect(result).toEqual(expected);
});

