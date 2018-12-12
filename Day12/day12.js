const { Underground } = require('./underground');
const { initialState, spreads, initialStateExample, spreadsExample } = require('./input');

const undergroundExample = new Underground(initialStateExample, spreadsExample);
undergroundExample.loopStateOverYears(20);
undergroundExample.showState();
const underground = new Underground(initialState, spreads);
underground.loopStateOverYears(20);
underground.showState();
