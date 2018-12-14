const LEFT = 'left';
const STRAIGHT = 'straight';
const RIGHT = 'right';

const CARTS_DIRECTIONS = ['<', '>', '^', 'v'];
const DIRECTION_CHANGERS = ['+', '/', '\\'];

const MAP_CART_REPLACEMENT = {
  '<': '-',
  '>': '-',
  '^': '|',
  'v': '|'
}

const CARTS_MOVEMENTS = {
  '>': { x: 1, y: 0 },
  '<': { x: -1, y: 0} ,
  '^': { x: 0, y: -1 },
  'v': { x: 0, y: 1 },
  'X': { x: 0, y: 0 }
}

const MOVES = {
  '/': {
    '>': '^',
    '<': 'v',
    'v': '<',
    '^': '>'
  },
  '\\': {
    '>': 'v',
    '<': '^',
    'v': '>',
    '^': '<'
  },
  '-': {
    '<': '<',
    '>': '>'
  },
  '|': {
    '^': '^',
    'v': 'v'
  }
}

const INTERSECTIONS = {
  '<': {
    [LEFT]: 'v',
    [STRAIGHT]: '<',
    [RIGHT]: '^'
  },
  '>': {
    [LEFT]: '^',
    [STRAIGHT]: '>',
    [RIGHT]: 'v'
  },
  '^': {
    [LEFT]: '<',
    [STRAIGHT]: '^',
    [RIGHT]: '>'
  },
  'v': {
    [LEFT]: '>',
    [STRAIGHT]: 'v',
    [RIGHT]: '<'
  }
}

const INTERSECTION_NEXT_MOVEMENT = {
  [LEFT]: STRAIGHT,
  [STRAIGHT]: RIGHT,
  [RIGHT]: LEFT
}

module.exports = {
  LEFT,
  STRAIGHT,
  RIGHT,
  MOVES,
  INTERSECTIONS,
  CARTS_MOVEMENTS,
  MAP_CART_REPLACEMENT,
  CARTS_DIRECTIONS,
  INTERSECTION_NEXT_MOVEMENT
}
