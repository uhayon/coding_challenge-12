const buildTree = input => {
  return buildNode(input)
}

const buildNode = (elements) => {
  const childrenCount = elements.shift();
  const entriesCount = elements.shift();
  const node = {
    children: [],
    entries: []
  }

  while (node.children.length < childrenCount) {
    node.children.push(buildNode(elements));
  }

  while (node.entries.length < entriesCount) {
    node.entries.push(elements.shift());
  }

  return node;
}

const sumTreeMeta = tree => {
  return sumNodeMeta(tree);
}

const sumNodeMeta = node => {
  let nodeSum = node.entries.reduce((acc, entry) => acc + entry, 0);
  let childrenSum = node.children.reduce((acc, child) => acc + sumNodeMeta(child), 0);
  return nodeSum + childrenSum;
  // if (node.children.length === 0) {
  //   return nodeSum;
  // }
  //
  // return nodeSum +
}

module.exports = {
  buildTree,
  sumTreeMeta
}
