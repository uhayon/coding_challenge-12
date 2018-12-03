const decomposeClaim = claim => {
  const [id, rectangle] = claim.split('@');
  const [edgesMargin, rectangleSizes] = rectangle.split(':');
  const [left, top] = edgesMargin.split(',');
  const [width, height] = rectangleSizes.split('x');

  return {
    id: parseInt(id.replace('#', '')),
    leftMargin: parseInt(left),
    topMargin: parseInt(top),
    width: parseInt(width),
    height: parseInt(height)
  };
}

module.exports = {
  decomposeClaim
}
