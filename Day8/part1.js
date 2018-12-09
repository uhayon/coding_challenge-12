const { input, inputExample } = require('./input');
const { buildTree, sumTreeMeta } = require('./helpers');

// console.log(JSON.stringify(buildTree(inputExample)));
console.log(sumTreeMeta(buildTree(input)));
