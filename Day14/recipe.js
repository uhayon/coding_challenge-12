class Recipe {
  constructor(value, nextRecipe, id) {
    this.value = value;
    this.next = nextRecipe;
    this.id = `recipe-${id}`;
  }
}

module.exports = {
  Recipe
}
