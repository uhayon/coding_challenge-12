const { input, inputExample } = require('./input');
const { buildTree, sumRootMeta } = require('./helpers');

console.log(sumRootMeta(buildTree(input)))
