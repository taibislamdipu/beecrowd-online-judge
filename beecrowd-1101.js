// Read an undetermined number of pairs values M and N (stop when any of these values is less or equal to zero). For each pair, print the sequence from the smallest to the biggest (including both) and the sum of consecutive integers between them (including both).

// Input
// The input file contains pairs of integer values M and N. The last line of the file contains a number zero or negative, or both.

// Output
// For each pair of numbers, print the sequence from the smallest to the biggest and the sum of these values, as shown below.

// Input Sample
// 5 2
// 6 3
// 5 0

// Output Sample
// 2 3 4 5 Sum=14
// 3 4 5 6 Sum=18

function numberInRange(x, y) {
  if (x === 0 || y === 0) {
    return "Found one of these values is less or equal to zero";
  }

  if (x > y) {
    [x, y] = [y, x];
  }

  return [x, y];
}

let sum = 0;

const result = numberInRange(6, 3);

for (let i = result[0]; i <= result[1]; i++) {
  sum = sum + i;
  console.log(i);
}

console.log(sum);
