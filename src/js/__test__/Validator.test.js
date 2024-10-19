import { test, expect } from '@jest/globals';
import { Validator } from '../Validator';

test.each([
  [ 'U', true ],
  [ 'username', true ],
  [ 'user333name', true ],
  [ 'user_1-1_name', true ],
  [ '-username-', false ],
  [ '_username_', false ],
  [ '7username7', false ],
  [ 'user4444name', false ],
])(('Testing the `validateUsername()` function of the `Validator` class'),
  (username, expected) => {
    const result = Validator.validateUsername(username);
    expect(result).toBe(expected);
  });
