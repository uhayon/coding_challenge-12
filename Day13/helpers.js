const carts = ['<', '>', '^', 'v'];
const takeCarts = map => {
  const carts = [];

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (carts.contains(map[i][j])) {
        carts.push(getCartOptions(map, i, j));
        map[i][j] = getMapTrack(map, i, j);
      }
    }
  }
}

const getCartOptions = (map, x, y) => {
  return {
    currentDirection: map[x][y],
    position: { x, y }
  };
}

const getMapTrack = (map, x, y) => {
  const [left, right, top, bottom] = [map[x][y-1], map[x][y+1], map[x-1][y], map[x+1][y]];
  
}

module.exports = {
  takeCarts
}
