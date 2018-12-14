const { Cart } = require('./cart');
const { takeCarts, cartsCrashed } = require('./helpers');

class Map {
  constructor(mapArray) {
    const [map, cartsOptions] = takeCarts(mapArray);
    this.map = map;
    this.crashes = [];
    this.carts = cartsOptions.map((cartOption, i) => {
      cartOption.id = `cart-${i}`;
      return new Cart(cartOption);
    });
  }

  moveCarts() {
    const carts = this.sortCarts(this.carts);
    for (let i = carts.length - 1; i >= 0; i--) {
      const cart = carts[i];
      const { x, y } = cart.position;
      cart.move(this.map[y][x]);

      const cartsInPosition = carts.filter((cartToFilter, index) => cartToFilter.position.y === cart.position.y && cart.position.x === cartToFilter.position.x);

      if (cartsInPosition.length >= 2) {
        cartsInPosition.forEach(cartCrashed => cartCrashed.crashed = true);
      }
    }
    this.removeCrashedCarts();
  }

  removeCrashedCarts() {
    const crashedCarts = this.sortCarts(this.carts.filter(cart => cart.crashed));
    this.crashes = [...this.crashes, ...crashedCarts];

    this.carts = this.carts.filter(cart => !cart.crashed);
  }

  sortCarts(carts) {
    return carts.sort((firstCart, secondCart) => {
      if (firstCart.position.y !== secondCart.position.y) {
        return secondCart.position.y - firstCart.position.y;
      }

      if (firstCart.position.x !== secondCart.position.x) {
        return secondCart.position.x - firstCart.position.x;
      }

      return 0;
    });
  }
}

module.exports = {
  Map
}
