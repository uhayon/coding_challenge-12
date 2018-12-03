const { inputArray: claims } = require('./input');
const { decomposeClaim } = require('./helpers');

const claimedSquares = {};
const claimsStatus = {};

const setReclaimedSquares = ({ height, width, topMargin, leftMargin, id }) => {
  let cleanClaim = true;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const squareId = (topMargin + i) + '_' + (leftMargin + j);
      const emptySquare = !claimedSquares[squareId];
      if (emptySquare) {
        claimedSquares[squareId] = [id];
      } else {
        claimedSquares[squareId] = [...claimedSquares[squareId], id];
        for (claimId of claimedSquares[squareId]) {
          claimsStatus[claimId] = 'overlaped';
        }
      }

      cleanClaim = cleanClaim && emptySquare;
    }
  }

  claimsStatus[id] = cleanClaim ? 'clean' : 'overlaped';
}

const checkCleanClaim = () => {
  for (claimId in claimsStatus) {
    if (claimsStatus[claimId] === 'clean') {
      return claimId;
    }
  }

  return 'No clean claim';
}

const checkOverlapedSquares = () => {
  let overlapedSquaresCount = 0;

  Object.values(claimedSquares).forEach(claims => {
    if (claims.length > 1) {
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
console.log('Clean Claim: ', checkCleanClaim());
