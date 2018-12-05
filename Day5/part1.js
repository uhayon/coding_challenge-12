const { input } = require('./input');
const { removeReactivePolymers } = require('./helpers');

const unreactivePolymers = removeReactivePolymers(input);
console.log(`Initial polymers: ${input.length}`);
console.log(`Unreactive polymers: ${unreactivePolymers.length}`);
// for (let i = 0; i < unreactivePolymers.length; i++) {
//   console.log(unreactivePolymers[i]);
// }
