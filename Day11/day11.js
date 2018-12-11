class FuelCellGrid {
  constructor(serialNumber) {
    this.serialNumber = serialNumber;
    this.grid = this.buildFuelCellGrid();
  }

  buildFuelCellGrid() {
    const fuelCellGrid = Array(300).fill(Array(300).fill('.'));
    return fuelCellGrid.map((row, x) => row.map((cell, y) => this.fillCell(x, y)))
  }

  fillSquare(grid, x, y) {
    let squarePower = 0;
    for (let i = x; i < (x + 3); i++) {
      for (let j = y; j < (y + 3); j++) {
        const cellPower = grid[i][j] !== '.' ? grid[i][j] : this.fillCell(i + 1, j + 1);
        grid[i][j] = cellPower;
        squarePower += cellPower;
      }
    }
    return squarePower;
  }

  showGrid() {
    console.log(this.grid);
  }

  fillCell(x, y) {
    const rackId = x + 10;
    let powerLevel = rackId * y ;
    powerLevel += this.serialNumber;
    powerLevel = powerLevel * rackId;
    powerLevel = Math.floor(powerLevel/100 % 10);
    powerLevel -= 5;

    return powerLevel;
  }

  findMaxPowerSubMatrix(subMatrixSize = 3) {
    const maxPower = {
      x: 0,
      y: 0,
      pow: -1
    }
    this.grid.forEach((row, i) => {
      if (i < 298) {
        row.forEach((cell, j) => {
          if (j < 298) {
            let power = 0;
            for (let x = i; x < (i + subMatrixSize); x++) {
              for (let y = j; y < (j + subMatrixSize); y++) {
                power += this.grid[x][y];
              }
            }

            if (power > maxPower.pow) {
              maxPower.pow = power;
              maxPower.x = i;
              maxPower.y = j;
            }
          }
        })
      }
    });

    console.log(maxPower);
  }
}

const input = 9445;
const fuelCellGrid = new FuelCellGrid(input);
fuelCellGrid.findMaxPowerSubMatrix();
