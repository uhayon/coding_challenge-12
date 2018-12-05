const { input } = require('./input');
const { removeReactivePolymers } = require('./helpers');

const unreactivePolymers = removeReactivePolymers(input);
console.log(`Initial polymers: ${input.length}`);
console.log(`Unreactive polymers: ${unreactivePolymers.length}`);
