const input = `439 players; last marble is worth 71307 points`;

const inputExample = `10 players; last marble is worth 1618 points: high score is 8317
13 players; last marble is worth 7999 points: high score is 146373
17 players; last marble is worth 1104 points: high score is 2764
21 players; last marble is worth 6111 points: high score is 54718
30 players; last marble is worth 5807 points: high score is 37305`.split('\n');

const parseInput = input => {
  const inputArray = input.split(' ');
  return { players: Number(inputArray[0]), maxMarble: Number(inputArray[6])}
};

module.exports = {
  input: parseInput(input),
  inputExample: inputExample.map(inp => parseInput(inp))
}
