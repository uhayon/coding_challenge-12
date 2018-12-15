const { Elf } = require('./elf');
const { Recipe } = require('./recipe');
const { contains } = require('../utils');

class LeaderBoard {
  constructor(skip) {
    this.recipes = 2;
    this.recipesValues = [3, 7];
    this.elves = [];
    this.top = 10;
    this.skip = skip;
    this.skipString = skip.toString();
    this.lastRecipe = null;
    this.initLeaderBoard();
  }

  initLeaderBoard() {
    const firstRecipe = new Recipe(3, null, 1);
    const secondRecipe = new Recipe(7, firstRecipe, 2);
    firstRecipe.next = secondRecipe;
    this.lastRecipe = secondRecipe;
    this.elves = [
      new Elf(firstRecipe),
      new Elf(secondRecipe)
    ];
  }

  createNewRecipes() {
    let newRecipeValue = this.elves.reduce((acc, elf) => acc + elf.currentRecipe.value, 0);
    let newRecipesIndividualValues = newRecipeValue.toString().split('');
    for (let i = 0; i < newRecipesIndividualValues.length; i++) {
      this.recipes++;
      const newRecipe = new Recipe(Number(newRecipesIndividualValues[i]), this.lastRecipe.next, this.recipes);
      this.lastRecipe.next = newRecipe;
      this.lastRecipe = newRecipe;
      this.recipesValues.push(newRecipesIndividualValues[i]);
    }
    this.setNewElvesCurrentRecipe();
  }

  setNewElvesCurrentRecipe() {
    for (let i = 0; i < this.elves.length; i++) {
      this.elves[i].setNewCurrentRecipe();
    }
  }

  getScore() {
    const stringScoreboard = this.recipesValues.join('');
    return stringScoreboard.substr(this.skip, this.top);
  }

  lookForPattern() {
    let patternFound = [];

    while (patternFound.join('') !== this.skipString) {
      let newRecipeValue = this.elves.reduce((acc, elf) => acc + elf.currentRecipe.value, 0);
      let newRecipesIndividualValues = newRecipeValue.toString().split('');
      for (let i = 0; i < newRecipesIndividualValues.length; i++) {
        this.recipes++;
        const newRecipe = new Recipe(Number(newRecipesIndividualValues[i]), this.lastRecipe.next, this.recipes);
        this.lastRecipe.next = newRecipe;
        this.lastRecipe = newRecipe;

        patternFound.push(newRecipesIndividualValues[i]);
        if (patternFound.length > this.skipString) {
          patternFound.shift();
        }
      }

      this.setNewElvesCurrentRecipe();
    }
    return this.recipes - this.skipString.length;
  }
}

module.exports = {
  LeaderBoard
}
