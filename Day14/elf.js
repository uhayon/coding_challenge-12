class Elf {
  constructor(currentRecipe) {
    this.currentRecipe = currentRecipe;
  }

  setNewCurrentRecipe() {
    const currentRecipeValue = this.currentRecipe.value;
    for (let i = 0; i <= currentRecipeValue; i++) {
      this.currentRecipe = this.currentRecipe.next;
    }
  }
}

module.exports = {
  Elf
}
