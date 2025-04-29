export function analyzeArray(array) {
  let analyzed = {}
  analyzed.average = getAverage(array);
  return analyzed;
}

function getAverage(array) {
  let sum = 0;
  for (let value of array) {
    sum += +value;
  }
  return sum / array.length;
}

