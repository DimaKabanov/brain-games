#!/usr/bin/env node
import game from '../solution';
import gameProcess from '../games/brain-calc-game';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');

game(gameProcess);
