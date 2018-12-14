const { contains } = require('../utils');
const { CARTS_DIRECTIONS, MAP_CART_REPLACEMENT } = require('./constants')

const takeCarts = map => {
  const cartsOptions = [];
  map = map.map((row, y) => row.map((cell, x) => {
    if (contains(CARTS_DIRECTIONS, map[y][x])) {
      cartsOptions.push(getCartOptions(map, y, x));
      return MAP_CART_REPLACEMENT[cell];
    }

    return cell;
  }));

  return [map, cartsOptions];
}

const getCartOptions = (map, y, x) => {
  return {
    direction: map[y][x],
    position: { x, y }
  };
}

const cartsCrashed = (currentCart, previousCart) => {
  return currentCart.position.y === previousCart.position.y && currentCart.position.x === previousCart.position.x;
}

module.exports = {
  takeCarts,
  cartsCrashed
}
