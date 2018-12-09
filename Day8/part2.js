const { input, inputExample } = require('./input');
const { buildTree, sumRootMeta } = require('./helpers');

// console.log(JSON.stringify(buildTree(inputExample)));
// console.log(sumRootMeta(buildTree(inputExample)));
console.log(sumRootMeta(buildTree(input)))
