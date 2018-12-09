const { input, inputExample } = require('./input');
const { executeSteps } = require('./helpers');

const WORKERS = 5;
const STEP_BASE_TIME = 60;
console.log(executeSteps(WORKERS, STEP_BASE_TIME, input));
