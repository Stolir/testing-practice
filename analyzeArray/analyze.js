export function analyzeArray(array) {
  let analyzed = {}
  analyzed.average = getAverage(array);
  analyzed.min = getMin(array);
  return analyzed;
}

function getAverage(array) {
  let sum = 0;
  for (let value of array) {
    sum += +value;
  }
  return sum / array.length;
}

function getMin(array) {
  return array.reduce((minValue, currentValue) => {
    return currentValue < minValue ? currentValue : minValue;
  }, array[0])
}
