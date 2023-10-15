// Function to calculate the average of an array
function calculateAverage(array) {
  if (array.length < 1) throw Error('Invalid Input');
  return array.reduce((total, value) => total + value, 0) / array.length;
}

// Function to find the minimum value in an array
function findMinimum(array) {
  if (array.length < 1) throw Error('Invalid Input');
  return array.reduce(
    (minValue, currValue) => (minValue > currValue ? currValue : minValue),
    array[0]
  );
}

// Function to find the maximum value in an array
function findMaximum(array) {
  if (array.length < 1) throw Error('Invalid Input');
  return array.reduce(
    (maxValue, currValue) => (maxValue < currValue ? currValue : maxValue),
    array[0]
  );
}

module.export = {
  calculateAverage,
  findMinimum,
  findMaximum,
};
