// Read an integer N that is the number of test cases. Each test case is a line containing two integer numbers X and Y. Print the sum of all odd values between them, not including X and Y.

// Input
// The first line of input is an integer N that is the number of test cases that follow. Each test case is a line containing two integer X and Y.

// Output
// Print the sum of all odd numbers between X and Y.

// Input Sample
// 7

// 4 5

// 13 10

// 6 4

// 3 3

// 3 5

// 3 4

// 3 8

// Output Sample
// 0

// 11

// 5

// 0

// 0

// 0

// 12

function sumOddNumbersInRange(x, y) {
  let sum = 0;

  if (x > y) {
    [x, y] = [y, x];
  }

  for (let i = x + 1; i < y; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }

  return sum;
}

const numbers = [
  [4, 5],
  [13, 10],
  [6, 4],
  [3, 3],
  [3, 5],
  [3, 4],
  [3, 8],
];

for (let i = 0; i < numbers.length; i++) {
  const [x, y] = numbers[i];
  const result = sumOddNumbersInRange(x, y);
  console.log(result);
}
