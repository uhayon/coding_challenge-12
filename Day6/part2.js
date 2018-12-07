const { inputArray, inputArrayExample } = require('./input');
const { getBoundaries, fillField, taxiCabGeometry } = require('./helpers');

// const boundaries = getBoundaries(inputArrayExample);
const boundaries = getBoundaries(inputArray);
const top = boundaries.yMax > boundaries.xMax ? boundaries.yMax : boundaries.xMax;
let field = Array(top + 1).fill(
  Array(top + 1).fill('.')
)

// field = fillField(field, inputArrayExample);
field = fillField(field, inputArray);

let countSafeAreas = 0;
for(let i = 0; i <= top; i++) {
  for (let j = 0; j <= top; j++) {
    let areaTotalManhattanDistance = 0;
    inputArray.forEach(point => {
      areaTotalManhattanDistance += taxiCabGeometry(point, {x: i, y: j})
    });

    if (areaTotalManhattanDistance < 10000) {
      countSafeAreas++;
    }
  }
}
console.log(countSafeAreas);
