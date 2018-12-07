const getBoundaries = points => {
  return {
    xMin: points.sort((a, b) => a.x - b.x)[0]['x'],
    xMax: points.sort((a, b) => a.x - b.x)[points.length - 1]['x'],
    yMin: points.sort((a, b) => a.y - b.y)[0]['y'],
    yMax: points.sort((a, b) => a.y - b.y)[points.length - 1]['y']
  }
};

const fillField = (field, points) => {
  return field.map((row, x) => {
    const rowFilled = row.map((cell, y) => {
      const nearestPointId = nearestPoint({x, y}, points);
      return nearestPointId;
    });
    return rowFilled;
  });
}


const nearestPoint = (currentCoordinate, points) => {
  let nearestPoint = {
    id: '.',
    distance: Infinity
  };

  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const distance = taxiCabGeometry(currentCoordinate, point);
    const id = (distance < nearestPoint.distance) ? i : ((distance === nearestPoint.distance) ? '.' : nearestPoint.id);

    if (distance < nearestPoint.distance) {
      nearestPoint.id = id;
      nearestPoint.distance = distance;
    } else if (distance === nearestPoint.distance) {
      nearestPoint.id = '.';
    }
  }
  return nearestPoint.id;
}

const taxiCabGeometry = (currentCoordinate, point) => {
  return Math.abs(currentCoordinate.x - point.x) + Math.abs(currentCoordinate.y - point.y);
}

const getUniques = array => {
  return [...new Set(array)];
}

const removeInfiniteAreas = field => {
  let infiniteAreasId = [...field[0], ...field[field.length - 1]];
  field.forEach(row => {
    infiniteAreasId = [...infiniteAreasId, row[0], row[row.length - 1]]
  });

  const uniqueIds = getUniques(infiniteAreasId);
  return field.map(row => {
    return row.map(cell => {
      return uniqueIds.indexOf(cell) > -1 ? '.' : cell;
    })
  })
}

module.exports = {
  getBoundaries,
  fillField,
  removeInfiniteAreas
}
