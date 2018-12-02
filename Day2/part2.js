const { inputArray } = require('./input');

const prototypeBoxesIndexes = {
  first: -1,
  second: -1
}

findPrototypeBoxes = () => {
  inputArray.forEach((boxId, i) => {
    let j = i + 1;
    let foundPrototypeBoxes = false;

    while (j < inputArray.length && !foundPrototypeBoxes) {
      let boxIdDiff = 0;
      for (let charIndex = 0; charIndex < boxId.length; charIndex++) {
        boxIdDiff = (boxId[charIndex] !== inputArray[j][charIndex]) ? boxIdDiff + 1 : boxIdDiff;
      }

      if (boxIdDiff === 1) {
        prototypeBoxesIndexes.first = i;
        prototypeBoxesIndexes.second = j;
        foundPrototypeBoxes = true;
      } else {
        j++;
      }
    }
  });
}

getPrototypeBoxesCommonLetters = () => {
  const { first, second } = prototypeBoxesIndexes;
  const commonLettersArray = [];

  if (first !== -1 && second !== -1) {
    const firstBoxId = inputArray[first];
    const secondBoxId = inputArray[second];

    for (let i = 0; i < firstBoxId.length; i++) {
      if (firstBoxId[i] === secondBoxId[i]) {
        commonLettersArray.push(firstBoxId[i]);
      }
    }
  }

  return commonLettersArray.join('');
}

findPrototypeBoxes();
console.log('The common letters are: ', getPrototypeBoxesCommonLetters());
