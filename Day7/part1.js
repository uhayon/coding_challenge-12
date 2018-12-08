const { input, inputExample } = require('./input');
const { orderSteps } = require('./helpers');

// console.log(inputExample);
const stepsSequence = orderSteps(input);
console.log(`The fucking sequence is: ${stepsSequence.join('')}`);
