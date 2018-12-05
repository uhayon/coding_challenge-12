const { input } = require('./input');
const { removeReactivePolymers, getPolymersWithoutType } = require('./helpers');

const getMinPolymersRemovingOneType = suit => {
  let minPolymers = input.length + 1;
  for (let i = 97; i <= 122; i++) {
    const char = String.fromCharCode(i);
    const suitPolymers = removeReactivePolymers(getPolymersWithoutType(suit, char));
    minPolymers = suitPolymers.length < minPolymers ? suitPolymers.length : minPolymers;
  }
  return minPolymers;
}
console.log(`The shortest polymer is: ${getMinPolymersRemovingOneType(input)}`);
