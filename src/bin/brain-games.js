#!/usr/bin/env node
import { getNameOfPlayer, sayPlayerHi } from '..';

console.log('Welcome to the Brain Games!');

sayPlayerHi(getNameOfPlayer());
