const initialStateExample = '#..#.#..##......###...###';
const spreadsExample = `...## => #
..#.. => #
.#... => #
.#.#. => #
.#.## => #
.##.. => #
.#### => #
#.#.# => #
#.### => #
##.#. => #
##.## => #
###.. => #
###.# => #
####. => #`;

const initialState = '##..##....#.#.####........##.#.#####.##..#.#..#.#...##.#####.###.##...#....##....#..###.#...#.#.#.#';
const spreads = `##.#. => .
##.## => .
#..## => .
#.#.# => .
..#.. => #
#.##. => .
##... => #
.#..# => .
#.### => .
..... => .
...#. => #
#..#. => #
###.. => #
.#... => #
###.# => #
####. => .
.##.# => #
#.#.. => #
.###. => #
.#.## => .
##### => #
....# => .
.#### => .
.##.. => #
##..# => .
#...# => .
..### => #
...## => .
#.... => .
..##. => .
.#.#. => #
..#.# => #`;

const parseInitialState = initialState => {
  const initialStateMap = {};
  initialState.split('').forEach((state, i) => {initialStateMap[i] = state});

  return initialStateMap;
}

const parseSpreadExample = spreads => {
  const spreadsArray = spreads.split('\n');
  const spreadMapping = {};

  spreadsArray.forEach(spread => {
    const [key, value] = spread.split(' => ');
    spreadMapping[key] = value;
  });

  return spreadMapping;
}

module.exports = {
  initialState: initialState,
  spreads: parseSpreadExample(spreads),
  initialStateExample: initialStateExample,
  spreadsExample: parseSpreadExample(spreadsExample)
};
