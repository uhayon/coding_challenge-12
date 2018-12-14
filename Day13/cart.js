const {
  LEFT,
  STRAIGHT,
  RIGHT,
  MOVES,
  INTERSECTIONS,
  CARTS_MOVEMENTS,
  INTERSECTION_NEXT_MOVEMENT
} = require('./constants');

class Cart {
  constructor({ position, direction }) {
    this.position = position;
    this.direction = direction;
    this.intersectionNextTurn = LEFT;
    this.crashed = false;
  }

  move(mapTrack) {
    if (mapTrack === '+') {
      this.direction = INTERSECTIONS[this.direction][this.intersectionNextTurn];
      this.intersectionNextTurn = INTERSECTION_NEXT_MOVEMENT[this.intersectionNextTurn];
    } else {
      this.direction = MOVES[mapTrack][this.direction];
    }

    const { x, y } = CARTS_MOVEMENTS[this.direction];
    this.position.x += x;
    this.position.y += y;
  }
}

module.exports = {
  Cart
}
