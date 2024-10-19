import { test, expect } from '@jest/globals';
import { Bowman } from '../Characters/Bowman';
import { Team } from '../Team';

test('Testing the `add()` method of the `Team` class', () => {
  const character = new Bowman('Player');
  const team = new Team();
  team.add(character);

  const expected = new Set();
  expected.add(character);
  expect(team.members).toEqual(expected);
});

test('Testing the `add()` method of the `Team` class with the same character, added twice', () => {
  expect(() => {
    const character = new Bowman('Player');
    const team = new Team();
    team.add(character);
    team.add(character);
  }).toThrow('This character is already a member of the team!');
});

test('Testing the `addAll()` method of the `Team` class', () => {
  const characterA = new Bowman('PlayerA');
  const characterB = new Bowman('PlayerB');
  const team = new Team();
  team.addAll(characterA, characterB, characterA);

  const expected = new Set();
  expected.add(characterA);
  expected.add(characterB);
  expect(team.members).toEqual(expected);
});

test('Testing the `toArray()` method of the `Team` class', () => {
  const characterA = new Bowman('PlayerA');
  const characterB = new Bowman('PlayerB');
  const characterC = new Bowman('PlayerC');
  const team = new Team();
  team.addAll(characterA, characterB, characterC);

  const expected = [
    characterA, characterB, characterC
  ];
  expect(team.toArray()).toEqual(expected);
});