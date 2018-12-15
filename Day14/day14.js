const { LeaderBoard } = require('./leaderboard');
const { contains } = require('../utils');

const skipExample = 2018;
const skipInput = 327901;

const leaderboard = new LeaderBoard(skipInput);
while (leaderboard.recipes < (leaderboard.skip + leaderboard.top)) {
  leaderboard.createNewRecipes();
}
const score = leaderboard.getScore();
console.log(`The final score is ${score}`);


const leaderboard2 = new LeaderBoard(skipInput);
console.log(`The pattern starts at: ${leaderboard2.lookForPattern()}`);
