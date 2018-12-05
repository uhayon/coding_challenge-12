const removeReactivePolymers = suit => {
  let suitPolymers = suit.split('');
  let removedAnyPolymer = true;
  while (removedAnyPolymer) {
    removedAnyPolymer = false;
    for (let i = suitPolymers.length - 2; i >= 0; i--) {
      const charIsUpper = suitPolymers[i] === suitPolymers[i].toUpperCase();
      const nextPolymer = suitPolymers[i + 1];
      const currentPolymerToCompare = charIsUpper ? suitPolymers[i].toLowerCase() : suitPolymers[i].toUpperCase();

      const polymerReact = currentPolymerToCompare === nextPolymer;
      if (polymerReact) {
        removedAnyPolymer = true;
        suitPolymers.splice(i, 2);
      }
    }
  }
  return suitPolymers;
}

const getPolymersWithoutType = (suit, type) => {
  const suitPolymers = suit.split('');
  const filteredPolymers = suitPolymers.filter(polymer => polymer.toLowerCase() !== type && polymer.toUpperCase() !== type.toUpperCase());
  return filteredPolymers.join('');
}

module.exports = {
  removeReactivePolymers,
  getPolymersWithoutType
}
