function findGraphIntersections(firstRectangle, secondRectangle) {
  let overlapRectangleY = findPosition(firstRectangle.bottomY, firstRectangle.height, secondRectangle.bottomY, secondRectangle.height);
  let overlapRectangleX = findPosition(firstRectangle.leftX, firstRectangle.width, secondRectangle.leftX, secondRectangle.width);
  let overlapRectangle = {
    leftX: overlapRectangleX.point,
    bottomY: overlapRectangleY.point,
    width: overlapRectangleX.length,
    height: overlapRectangleY.length
  };
  if (overlapRectangle.leftX < 0) {
    overlapRectangle = { message: "There is no horizontal spoon" }
  } else if (overlapRectangle.bottomY < 0) {
    overlapRectangle = { message: "There is no vertical spoon" }
  } else if (overlapRectangle.width < 0) {
    overlapRectangle = { message: "There is no width forks"}
  } else if (overlapRectangle.height < 0) {
    overlapRectangle = { message: "There is no height forks"}
  } else {
    overlapRectangle
  }

  return overlapRectangle
};

function findPosition(firstPoint, firstLength, secondPoint, secondLength) {
  let high = Math.max(firstPoint, secondPoint)
  let low = Math.min(firstPoint + firstLength, secondPoint + secondLength)
  let length = low - high;
  return { point: high, length: length };
};

let firstRectangle = {
  leftX: 1,
  bottomY: 1,
  width: 2,
  height: 3
};
let secondRectangle = {
  leftX: 1,
  bottomY: 3,
  width: 2,
  height: 5
};

console.log(findGraphIntersections(firstRectangle, secondRectangle))
