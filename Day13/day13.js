const { inputExample, input } = require('./input');
const { Map } = require('./map');

const mapPart1 = new Map(input);
while (mapPart1.crashes.length === 0) {
  mapPart1.moveCarts();
}
console.log(`The first pair of carts crashed at: ${mapPart1.crashes[0].position.x},${mapPart1.crashes[0].position.y}`);

const mapPart2 = new Map(input);
while (mapPart2.carts.length > 1) {
  mapPart2.moveCarts();
}
console.log(`The last cart is standing at: ${mapPart2.carts[0].position.x},${mapPart2.carts[0].position.y}`);
