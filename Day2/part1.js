const { inputArray } = require('./input');

const boxesClassification = {
  twoOfSame: 0,
  threeOfSame: 0
};

decomposeBoxId = boxId => {
  const decomposedBoxId = {};

  for (char of boxId) {
    if (!decomposedBoxId[char]) {
      decomposedBoxId[char] = 0;
    }
    decomposedBoxId[char]++;
  }

  return decomposedBoxId;
}

evaluateBoxId = boxId => {
  const decomposedBoxId = decomposeBoxId(boxId);

  return {
    twoOfSame: Object.values(decomposedBoxId).some(count => count === 2),
    threeOfSame: Object.values(decomposedBoxId).some(count => count === 3)
  }
}

inputArray.forEach(boxId => {
  const { twoOfSame, threeOfSame } = evaluateBoxId(boxId);
  boxesClassification.twoOfSame = twoOfSame ? boxesClassification.twoOfSame + 1 : boxesClassification.twoOfSame;
  boxesClassification.threeOfSame = threeOfSame ? boxesClassification.threeOfSame + 1 : boxesClassification.threeOfSame;
});

console.log(boxesClassification);
console.log('The checkSum is: ', boxesClassification.twoOfSame * boxesClassification.threeOfSame);
