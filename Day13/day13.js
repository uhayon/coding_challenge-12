const { inputExample, input } = require('./input');
const { Map } = require('./map');

let i = 0;
const map = new Map(input);
while (map.crashes.length === 0) {
  // console.log(i++);
  map.moveCarts();
}
console.log(`The first pair of carts crashed at: ${map.crashes[0].position.x},${map.crashes[0].position.y}`);
