class Underground {
  constructor(initialState, spreadConditions) {
    this.state = this.trimState(initialState);
    this.spreads = spreadConditions;
    this.passedYears = 0;
    this.offset = 0;
  }

  getPotNumbersSum() {
    return this.state
      .split('')
      .map((pot, i) => pot === '#' ? i - this.offset : 0)
      .reduce((acc, pot) => acc + pot);
  }

  getPotValue(state, potIndex) {
    return !state[potIndex] ? '.' : state[potIndex];
  }

  getStateGroup(state, center) {
    let stateGroup = '';
    for (let i = -2; i <= 2; i++) {
      stateGroup += this.getPotValue(state, center + i);
    }
    return stateGroup;
  }

  trimState(state) {
    const [firstIndexOccupiedPot, lastIndexOccupiedPot] = [state.indexOf('#'), state.lastIndexOf('#')]
    state = state.substr(firstIndexOccupiedPot, lastIndexOccupiedPot - firstIndexOccupiedPot + 1);

    return state;
  }

  loopStateOverYears(years) {
    let i = 1;

    let offset = 0;
    while (i++ <= years) {
      let newState = '', currentState = '....' + this.state + '....';
      for (let j = 2; j < currentState.length - 2; j++) {
        const stateGroup = this.getStateGroup(currentState, j);
        newState += (this.spreads[stateGroup] === '#' ? '#' : '.')
      }

      let [firstIndexOccupiedPot, lastIndexOccupiedPot] = [newState.indexOf('#') - 1, newState.lastIndexOf('#') + 1];
      if (firstIndexOccupiedPot === newState.length) {
        newState = '';
        offset = 0;
      } else {
        newState = newState.substr(firstIndexOccupiedPot, lastIndexOccupiedPot - firstIndexOccupiedPot + 1);
        offset = offset - 2 + firstIndexOccupiedPot;
      }

      if (newState === this.state) break;

      this.state = newState;
    }
    this.offset = offset + (offset - this.offset) * (years - i);
  }

  showState() {
    console.log(`Current state after ${this.passedYears} years:\n${this.state}\nThe pots sum is: ${this.getPotNumbersSum()}`);
  }
}

module.exports = {
  Underground
}
