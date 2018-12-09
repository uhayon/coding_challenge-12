const playGame = ({ players, maxMarble }) => {
  const playersScore = Array(players).fill(0);
  const gameStatus = { currentMarble: 1, field: [0, 1] };

  for (let i = 2; i <= maxMarble; i++) {
    if (i % 23 === 0) {
      const player = i % players;
      const marbleIndexToRemove = getMarbleIndexToRemove(gameStatus);
      gameStatus.currentMarble = gameStatus.field[marbleIndexToRemove + 1] ? gameStatus.field[marbleIndexToRemove + 1] : 0;
      const removedMarble = gameStatus.field.splice(marbleIndexToRemove, 1);
      playersScore[player] += (i + Number(removedMarble));
    } else {
      const currentMarbleIndex = gameStatus.field.indexOf(gameStatus.currentMarble);
      if (currentMarbleIndex === gameStatus.field.length - 2) {
        gameStatus.field.push(i);
      } else if(currentMarbleIndex === gameStatus.field.length - 1) {
        gameStatus.field.splice(1, 0, i);
      } else {
        gameStatus.field.splice(currentMarbleIndex + 2, 0, i);
      }
      gameStatus.currentMarble = i;
    }
  }

  return Math.max(...playersScore);
}

const getMarbleIndexToRemove = ({currentMarble, field}) => {
  const currentMarbleIndex = field.indexOf(currentMarble);
  if (currentMarbleIndex >= 8) {
    return currentMarbleIndex - 7;
  } else {
    return field.length - (7 - currentMarbleIndex);
  }
}

module.exports = {
  playGame
}
