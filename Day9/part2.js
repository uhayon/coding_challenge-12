const { input, inputExample } = require('./input');
const { playGameHundredTimesMoreMarbles } = require('./helpers');

console.log(`For ${input.players} players, the max result is ${playGameHundredTimesMoreMarbles(input)}`);
