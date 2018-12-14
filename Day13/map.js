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
    this.sortCarts();
    for (let i = this.carts.length - 1; i >= 0; i--) {
      const cart = this.carts[i];
      const { x, y } = cart.position;
      cart.move(this.map[y][x]);


      const crashedCartsIndexes = {};
      const crashedCarts = this.carts.filter((cartToFilter, index) => {
        const crashed = cartToFilter.position.y === cart.position.y && cart.position.x === cartToFilter.position.x;
        if (crashed) {
          crashedCartsIndexes[index] = cartToFilter;
        }
        return crashed;
      });
      if (crashedCarts.length >= 2) {
        const crash = {
          position: { x: cart.position.x, y: cart.position.y },
          carts: []
        }

        for (let crashedCartIndex in crashedCartsIndexes) {
          crash.carts.push(this.carts.splice(crashedCartIndex, 1));
        }
        this.crashes.push(crash);
        i-= 2;
      }
    }
  }

  sortCarts() {
    this.carts = this.carts.sort((firstCart, secondCart) => {
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
