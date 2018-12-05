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
  // let i = 0;
  // while (i < suitPolymers.length) {
  //   const charIsUpper = suitPolymers[i] === suitPolymers[i].toUpperCase();
  //   const nextPolymer = suitPolymers[i + 1];
  //   const currentPolymerToCompare = charIsUpper ? suitPolymers[i].toLowerCase() : suitPolymers[i].toUpperCase();
  //
  //   const polymerReact = currentPolymerToCompare === nextPolymer;
  //   if (polymerReact) {
  //     suitPolymers.splice(i, 2);
  //   } else {
  //     i++;
  //   }
  // }
  // return suitPolymers;
}

module.exports = {
  removeReactivePolymers
}
