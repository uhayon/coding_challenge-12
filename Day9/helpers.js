const playGame = ({ players, maxMarble }) => {
  const playersScore = Array(players).fill(0);

  const zeroMarble = createNewMarble(0);
  let currentMarble = zeroMarble;
  currentMarble.next = zeroMarble;
  currentMarble.previous = zeroMarble;

  for (let i = 1; i <= maxMarble; i++) {
    if (i % 23 !== 0) {
      const newMarble = createNewMarble(i);
      let currentNextMarble = currentMarble.next;

      newMarble.next = currentNextMarble.next;
      newMarble.previous = currentNextMarble;
      currentNextMarble.next.previous = newMarble;
      currentNextMarble.next = newMarble;
      currentMarble = newMarble;
    } else {
      for (let j = 0; j < 6; j++) {
        currentMarble = currentMarble.previous;
      }

      const player = i % players;
      playersScore[player] += (i + currentMarble.previous.id);
      let previousMarble = currentMarble.previous;
      previousMarble.previous.next = previousMarble.next;
      previousMarble.next.previous = previousMarble.previous;
      previousMarble.next = null;
      previousMarble.previous = null;
    }
  }

  return Math.max(...playersScore);
}

const createNewMarble = id => {
  return {
    id,
    next: null,
    previous: null
  }
}

const getMarbleIndexToRemove = ({currentMarble, field}) => {
  const currentMarbleIndex = field.indexOf(currentMarble);
  if (currentMarbleIndex >= 8) {
    return currentMarbleIndex - 7;
  } else {
    return field.length - (7 - currentMarbleIndex);
  }
}

const playGameHundredTimesMoreMarbles = ({ players, maxMarble}) => {
  return playGame({players, maxMarble: maxMarble * 100});
}

module.exports = {
  playGame,
  playGameHundredTimesMoreMarbles
}
