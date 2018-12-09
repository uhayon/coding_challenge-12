const { input, inputExample } = require('./input');
const { playGame } = require('./helpers');

// console.log(inputExample[0]);
// inputExample.forEach(example => {
//   console.log(`For ${example.players} players, the max result is ${playGame(example)}`);
// })
console.log(`For ${input.players} players, the max result is ${playGame(input)}`);
