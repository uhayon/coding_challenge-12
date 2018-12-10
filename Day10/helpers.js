const fs = require('fs');

class Sky {
  constructor(lights) {
    this.lights = lights.map(light => new Light(light));
    this.ellapsedTime = 0;
    this.wordFormed = false;
    this.bounds = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
    this.setBounds();
  }

  moveLights() {
    this.ellapsedTime++;
    this.lights.forEach(light => {
      light.move();
    });

    this.setBounds();
  }

  backLights() {
    this.ellapsedTime--;
    this.lights.forEach(light => {
      light.back();
    });
    this.setBounds();
  }

  setBounds() {
    const oldMatrixSize = this.getMatrixSize();
    const bounds = {
      xAxisValues: [],
      yAxisValues: []
    };

    this.lights.forEach(light => {
      bounds.xAxisValues.push(light.position.x);
      bounds.yAxisValues.push(light.position.y);
    })

    this.bounds.top = Math.min(...bounds.yAxisValues);
    this.bounds.bottom = Math.max(...bounds.yAxisValues);
    this.bounds.left = Math.min(...bounds.xAxisValues);
    this.bounds.right = Math.max(...bounds.xAxisValues);

    const currentMatrixSize = this.getMatrixSize();
    this.wordFormed = this.ellapsedTime > 0 ? (oldMatrixSize.height * oldMatrixSize.width) < (currentMatrixSize.height * currentMatrixSize.width) : false;
  }

  getMatrixSize() {
    const { bottom, top, right, left } = this.bounds;
    const [height, width] = [Math.abs(bottom - top) + 1, Math.abs(right - left) + 1];

    return {
      height,
      width
    }
  }

  printWord() {
    const {height, width} = this.getMatrixSize();
    const {horizontal, vertical} = this.getMatrixGap();
    let sky = '';

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        sky += this.getLightValueAtPosition(j, i);
      }
      sky += '\n';
    }

    fs.writeFile('./word.txt', sky, err => {
      if (err) {
        return console.log(err);
      }

      console.log('Word Saved!');
    });
  }

  getLightValueAtPosition(x, y) {
    const {horizontal, vertical} = this.getMatrixGap();
    const lightAtPosition = this.lights.filter(light => {
      return (light.position.x - horizontal === x) && (light.position.y - vertical === y)
    });

    if (lightAtPosition.length > 0) {
      return '#';
    } else {
      return '.'
    }
  }

  getMatrixGap() {
    const { top, left } = this.bounds;

    return {
      horizontal: Math.abs(left),
      vertical: Math.abs(top)
    };
  }
}

class Light {
  constructor({position, velocity}) {
    this.position = position;
    this.velocity = velocity;
  }

  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  back() {
    this.position.x -= this.velocity.x;
    this.position.y -= this.velocity.y;
  }
}

const showWord = lights => {
  const sky = new Sky(lights);
  while(!sky.wordFormed) {
    sky.moveLights();
  }
  sky.backLights();
  sky.printWord();
  console.log(`The word was printed after ${sky.ellapsedTime} seconds`);
}

module.exports = {
  showWord
}
