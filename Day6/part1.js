const { inputArray, inputArrayExample } = require('./input');
const { getBoundaries, fillField, removeInfiniteAreas } = require('./helpers');

// const boundaries = getBoundaries(inputArrayExample);
const boundaries = getBoundaries(inputArray);
const top = boundaries.yMax > boundaries.xMax ? boundaries.yMax : boundaries.xMax;
let field = Array(top + 1).fill(
  Array(top + 1).fill('.')
)

// field = fillField(field, inputArrayExample);
field = fillField(field, inputArray);

const fieldWithoutInfinites = removeInfiniteAreas(field);

const getMaxFiniteArea = field => {
  const areas = {};
  field.forEach(row => {
    row.forEach(cell => {
      if (!areas[cell]) {
        areas[cell] = 0;
      }
      areas[cell]++;
    })
  });

  let max = 0;
  for (let area in areas) {
    if (area === '.') {
      continue;
    }

    max = areas[area] > max ? areas[area] : max;
  }
  return max;
}

console.log(`The max finite area is: ${getMaxFiniteArea(fieldWithoutInfinites)}`);
