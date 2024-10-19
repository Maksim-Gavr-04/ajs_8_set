import { Swordsman } from './Characters/Swordsman';
import { Team } from './Team';

// TODO: write code here

const characterA = new Swordsman('PlayerA');
const characterB = new Swordsman('PlayerB');
const characterC = new Swordsman('PlayerC');

const team = new Team();
team.addAll(characterA, characterB, characterC);
console.log(team);

console.log('app worked!');