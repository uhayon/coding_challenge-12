const { inputArray: claims } = require('./input');
const { decomposeClaim } = require('./helpers');

const claimedSquares = {};

const setReclaimedSquares = ({ height, width, topMargin, leftMargin, id }) => {
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const squareId = (topMargin + i) + '_' + (leftMargin + j);
      if (!claimedSquares[squareId]) {
        claimedSquares[squareId] = 0;
      }
      claimedSquares[squareId]++;
    }
  }
}

const checkOverlapedSquares = () => {
  let overlapedSquaresCount = 0;

  Object.values(claimedSquares).forEach(timesClaimed => {
    if (timesClaimed > 1) {
      overlapedSquaresCount++;
    }
  })

  return overlapedSquaresCount;
}

const reclaimSquares = () => {
  for (claim of claims) {
    const decomposedClaim = decomposeClaim(claim);
    setReclaimedSquares(decomposedClaim);
  }
}

reclaimSquares();
console.log('Overlaped squares: ', checkOverlapedSquares());
